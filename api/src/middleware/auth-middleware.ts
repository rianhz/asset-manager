import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const protectRoute = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.cookies.token;
        console.log("token", token);

        if (!token) {
            res.status(401).json({ success: false, message: 'Not authorized, please login' });
            return;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        console.log("decoded", decoded);

        (req as any).user = decoded; 

        console.log("req.user", (req as any).user);

        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Token is invalid or expired' });
    }
};