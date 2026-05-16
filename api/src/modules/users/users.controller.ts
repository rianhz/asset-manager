import { Request, Response, NextFunction } from 'express';
import { registerService, loginService } from './users.service';

export const registerController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await registerService(email, password);
    res.status(201).json({ success: true, message: 'User registered successfully', data: user });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const loginController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;
    const result = await loginService(email, password);
    res.status(200).json({ success: true, message: 'Login successful', ...result });
  } catch (error: any) {
    res.status(401).json({ success: false, message: error.message });
  }
};