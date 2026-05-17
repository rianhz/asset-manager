import bcrypt from 'bcryptjs';
import { generateToken } from '../../helpers/auth-helper';
import { UserModel } from '../users/users.model';
import { IUser } from '../users/users.interface';

// 1. Existing Register Service (Updated to handle potential Google conflicts)
const registerService = async (email: string, password: string): Promise<void> => {
    const existingUser = await UserModel.findOne({ email }).lean();
    if (existingUser) {
        // If they exist but signed up with Google previously
        if (existingUser.googleId && !existingUser.passwordHash) {
            throw new Error('This email is registered via Google. Please log in using Google.');
        }
        throw new Error('Email is already registered');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await UserModel.create({ email, passwordHash });
};

// 2. Existing Login Service (Updated to check for Google account locking)
const loginService = async (email: string, password: string): Promise<{ userId: string; token: string }> => {
    const user = await UserModel.findOne({ email }).lean();
    if (!user) {
        throw new Error('Invalid email or password');
    }

    // Guard: Prevent email/password login if they only set up Google
    if (!user.passwordHash) {
        throw new Error('This account uses Google Login. Please sign in with Google.');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordMatch) {
        throw new Error('Invalid email or password');
    }

    const token = generateToken((user._id).toString(), user.email);

    return { userId: user._id.toString(), token };
};

// 3. NEW: Google Authentication Service (Handles both signup & login)
const googleAuthService = async (googleData: { googleId: string; email: string; name: string; avatar?: string }): Promise<{ user: Omit<IUser, 'passwordHash'>; token: string }> => {
    const { googleId, email, name, avatar } = googleData;

    // Check if user already exists by Google ID or Email
    let user = await UserModel.findOne({ 
        $or: [{ googleId }, { email }] 
    });

    if (user) {
        // Case: User registered with Email before, but is now trying to log in with Google
        if (!user.googleId) {
            user.googleId = googleId;
            if (!user.avatar && avatar) user.avatar = avatar; // merge avatar if empty
            await user.save();
        }
    } else {
        // Case: Completely new user via Google
        user = await UserModel.create({
            email,
            googleId,
            name,
            avatar
        });
    }

    // Convert Mongoose Document to plain object
    const userObj = user.toObject ? user.toObject() : user;
    const token = generateToken((userObj._id).toString(), userObj.email);

    const { passwordHash: _, ...userWithoutPassword } = userObj;
    return { user: userWithoutPassword, token };
};

const getProfile = async (userId: string): Promise<IUser> => {
    const user = await UserModel.findById(userId).lean();
    if (!user) {
        throw new Error('User not found');
    }
    const { passwordHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

export { registerService, loginService, googleAuthService, getProfile };