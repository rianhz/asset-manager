import { Request, Response, NextFunction } from 'express';
import { registerService, loginService, googleAuthService, logoutService } from './authentication.service';
import { ACCESS_COOKIE_OPTIONS, REFRESH_COOKIE_OPTIONS } from '../../utils/constant';
import jwt, { JwtPayload } from 'jsonwebtoken';


export const registerController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Email and password are required' });
            return;
        }

        await registerService(email, password);
        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const loginController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Email and password are required' });
            return;
        }

        const { accessToken, refreshToken } = await loginService(email, password);

        res.cookie('accessToken', accessToken, ACCESS_COOKIE_OPTIONS);
        res.cookie('refreshToken', refreshToken, REFRESH_COOKIE_OPTIONS);

        res.status(200).json({ 
            success: true,
        });
    } catch (error: any) {
        res.status(401).json({ success: false, message: error.message });
    }
};

export const logoutController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const decoded = jwt.verify(req.cookies.accessToken, process.env.JWT_ACCESS_SECRET as string) as JwtPayload;
        await logoutService(decoded.id);

        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.status(200).json({ success: true, message: 'Logged out successfully' });
    } catch (error: any) {
        res.status(401).json({ success: false, message: error.message });
    }
};

export const googleCallbackController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (!(req as any).user) {
            return res.redirect(`${process.env.FRONTEND_URL}/login?error=Google%20auth%20failed`);
        }

        const profile = (req as any).user; 

        const googleData = {
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
            avatar: profile.photos?.[0]?.value
        };

        const { accessToken, refreshToken } = await googleAuthService(googleData);

        res.cookie('accessToken', accessToken, ACCESS_COOKIE_OPTIONS);
        res.cookie('refreshToken', refreshToken, REFRESH_COOKIE_OPTIONS);

        return res.redirect(`${process.env.FRONTEND_URL}/dashboard`);
        
    } catch (error: any) {
        return res.redirect(`${process.env.FRONTEND_URL}/login?error=${encodeURIComponent(error.message)}`);
    }
};
