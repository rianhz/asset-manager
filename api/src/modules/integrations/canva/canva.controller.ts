import { Request, Response, NextFunction } from 'express';
import { generateAccessToken, refreshAccessToken, revokeToken, introspectToken, createDesign, listDesigns, getDesign } from './canva.service';

export const getCanvaToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const tokens = await generateAccessToken(
            req.body.code,
            req.body.codeVerifier,
            req.body.redirectUri
        );

        res.status(200).json({ success: true, message: 'Canva token generated successfully', data: tokens });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const introspectCanvaToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const introspection = await introspectToken(req.body.token);
        res.status(200).json({ success: true, message: 'Canva token introspected successfully', data: introspection });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const refreshCanvaToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const accessToken = await refreshAccessToken(req.body.refreshToken);
        res.status(200).json({ success: true, message: 'Canva token refreshed successfully', data: accessToken });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const revokeCanvaToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        await revokeToken(req.body.token);
        res.status(200).json({ success: true, message: 'Canva token revoked successfully' });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const getDesigns = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const designs = await listDesigns(req.body.accessToken);
        res.status(200).json({ success: true, message: 'Canva designs fetched successfully', data: designs });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const getDesignById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const design = await getDesign(req.body.accessToken, req.body.designId);
        res.status(200).json({ success: true, message: 'Canva design fetched successfully', data: design });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const createNewDesign = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const design = await createDesign(req.body.accessToken, req.body.design);
        res.status(200).json({ success: true, message: 'Canva design created successfully', data: design });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}