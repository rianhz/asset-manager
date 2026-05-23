import { UserModel } from './users.model';
import { IUser } from './users.interface';

const getProfile = async (userId: string): Promise<IUser> => {
    const user = await UserModel.findById(userId).lean();
    if (!user) {
        throw new Error('User not found');
    }
    const { passwordHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

export { getProfile };