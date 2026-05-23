import bcrypt from 'bcryptjs';
import { generateAccessToken, generateRefreshToken } from '../../helpers/auth-helper';
import { UserModel } from '../users/users.model';
import { IUser } from '../users/users.interface';

const registerService = async (email: string, password: string): Promise<void> => {
    const existingUser = await UserModel.findOne({ email }).lean();
    if (existingUser) {
        if (existingUser.googleId && !existingUser.passwordHash) {
            throw new Error('This email is registered via Google. Please log in using Google.');
        }
        throw new Error('Email is already registered');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await UserModel.create({ email, passwordHash });
};

const loginService = async (email: string, password: string): Promise<{ accessToken: string, refreshToken: string }> => {
    const user = await UserModel.findOne({ email }).lean();
    if (!user) {
        throw new Error('Invalid email or password');
    }

    if (!user.passwordHash) {
        throw new Error('This account uses Google Login. Please sign in with Google.');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordMatch) {
        throw new Error('Invalid email or password');
    }

    const fifteenMinutes = 1 * 60;
    const thirtyDays = 30 * 24 * 60 * 60;

    const accessToken = generateAccessToken((user._id).toString(), fifteenMinutes); 
    const refreshToken = generateRefreshToken((user._id).toString(), thirtyDays);
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

    await UserModel.findByIdAndUpdate(user._id, { 
        $set: { 
            refreshToken: { 
                token: hashedRefreshToken, 
                expiresIn: thirtyDays, 
                createdAt: new Date() 
            } 
        } 
    });

    return { accessToken, refreshToken };
};

const googleAuthService = async (googleData: { googleId: string; email: string; name: string; avatar?: string }): Promise<{ user: Omit<IUser, 'passwordHash'>; accessToken: string, refreshToken: string }> => {
    const { googleId, email, name, avatar } = googleData;

    let user = await UserModel.findOne({ 
        $or: [{ googleId }, { email }] 
    });

    if (user) {
        if (!user.googleId) {
            user.googleId = googleId;
            if (!user.avatar && avatar) user.avatar = avatar; // merge avatar if empty
            await user.save();
        }
    } else {
        user = await UserModel.create({
            email,
            googleId,
            name,
            avatar
        });
    }

    const userObj = user.toObject ? user.toObject() : user;
    const accessToken = generateAccessToken((userObj._id).toString(), 15); 
    const refreshToken = generateRefreshToken((userObj._id).toString(), 30); 

    const { passwordHash: _, ...userWithoutPassword } = userObj;
    return { user: userWithoutPassword, accessToken, refreshToken };
};

const logoutService = async (userId: string): Promise<void> => {
    const user = await UserModel.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    await UserModel.findByIdAndUpdate(userId, { $set: { refreshToken: { token: null, expiresIn: null, createdAt: null } } });
};


export { registerService, loginService, googleAuthService, logoutService };