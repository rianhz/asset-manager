import { Request, Response, NextFunction } from 'express';
import { getProfile } from './users.service';

export const getProfileController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

        const userId = req.params.userId;
        const profile = await getProfile(userId as string);
        res.status(200).json({ success: true, data: profile });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};