import { getAllUserFiles, getFile, uploadFiles } from "./files.service";
import { Request, Response } from "express";

export const uploadFileController = async (req: Request, res: Response) => {
    try {
        const { files } = req.body; 
        const userId = (req as any).user.id;

        if (!Array.isArray(files)) {
            throw new Error(`Expected an array for 'files', instead got: ${typeof files}`);
        }

        const file = await uploadFiles({ files, userId });
        
        res.status(200).json({ 
            success: true, 
            data: file, 
            message: "Total " + file.length + " files uploaded successfully" 
        });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const getFileController = async (req: Request, res: Response) => {
    try {
        const fileId = req.params.id as string;
        const file = await getFile({ fileId });
        res.status(200).json({ success: true, data: file });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const getAllUserFilesController = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;
        const files = await getAllUserFiles({ userId });

        res.status(200).json({ success: true, data: files });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}