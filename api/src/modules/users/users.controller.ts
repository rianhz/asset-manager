import { Request, Response, NextFunction } from 'express';
import { registerService, loginService, googleAuthService, getProfile } from './users.service';

// Helper config for cookie settings to avoid repetition
const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    maxAge: 24 * 60 * 60 * 1000 // 1 day
};

// 1. REGISTER CONTROLLER
export const registerController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Email and password are required' });
            return;
        }

        const user = await registerService(email, password);
        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 2. LOGIN CONTROLLER (Updated to use cookies, matching Google OAuth)
export const loginController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Email and password are required' });
            return;
        }

        const { user, token } = await loginService(email, password);

        // Set the JWT token inside an HttpOnly cookie
        res.cookie('token', token, COOKIE_OPTIONS);

        // Return user data without exposing the token in the body
        res.status(200).json({ 
            success: true,
            data: user 
        });
    } catch (error: any) {
        res.status(401).json({ success: false, message: error.message });
    }
};

// 3. GOOGLE CALLBACK CONTROLLER (Fixed with safety guards)
export const googleCallbackController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Guard clause in case passport authentication failed silently
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

        const { token } = await googleAuthService(googleData);

        // Set token as HttpOnly cookie so Next.js frontend can access it safely
        res.cookie('token', token, COOKIE_OPTIONS);

        // Redirect back to your Next.js application dashboard
        return res.redirect(`${process.env.FRONTEND_URL}/dashboard`);
        
    } catch (error: any) {
        return res.redirect(`${process.env.FRONTEND_URL}/login?error=${encodeURIComponent(error.message)}`);
    }
};

export const getProfileController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

        const userId = req.params.userId;
        const profile = await getProfile(userId as string);
        res.status(200).json({ success: true, data: profile });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};