import { deleteFile, getFile, uploadFile } from "./files.service";
import { Request, Response } from "express";

export const uploadFileController = async (req: Request, res: Response) => {
    try {
        const { folderId, name, originalName, mimeType, size, uploadthingKey, url } = req.body;
        const file = await uploadFile({ folderId, name, originalName, mimeType, size, uploadthingKey, url });
        res.status(200).json({ success: true, data: file });
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

export const deleteFileController = async (req: Request, res: Response) => {
    try {
        const fileId = req.params.id as string;
        const file = await deleteFile({ fileId });
        res.status(200).json({ success: true, data: file });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
}