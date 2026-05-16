import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from './users.model';
import { IUser } from './users.interface';


const registerService = async (email: string, password: string): Promise<Omit<IUser, 'passwordHash'>> => {
    const existingUser = await UserModel.findOne({ email }).lean();
    if (existingUser) {
        throw new Error('Email is already registered');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({ email, passwordHash });
    const user = newUser.toObject();

    const { passwordHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

const loginService = async (email: string, password: string): Promise<{ user: Omit<IUser, 'passwordHash'>; token: string }> => {
    const user = await UserModel.findOne({ email }).lean();
    if (!user) {
    throw new Error('Invalid email or password');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordMatch) {
    throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '1d'
    });

    const { passwordHash: _, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, token };
}

export { registerService, loginService };