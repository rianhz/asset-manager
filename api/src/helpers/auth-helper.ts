import jwt from 'jsonwebtoken';

export const generateToken = (userId: string, email: string): string => {
    return jwt.sign(
        { id: userId, email }, 
        process.env.JWT_SECRET || 'secret', 
        { expiresIn: '1d' }
    );
};