import { Request, Response } from "express";
import { createFolder, createRootFolder, getFolderExplorer, shareFolder } from "./folders.service";

export const createRootFolderController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = (req as any).user._id;
    const { name } = req.body;
    const folder = await createRootFolder({ userId, name });

    res.status(200).json({ success: true, data: folder });
  } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const createFolderController = async (
  req: Request,
  res: Response
) => {
  try {
    const { parentId, name } = req.body;
    const folder = await createFolder({ parentId, name });
    res.status(200).json({ success: true, data: folder });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const shareFolderController = async (
  req: Request,
  res: Response
) => {
  try {
    const { folderId, userId } = req.body;
    const folder = await shareFolder({ folderId, userId });
    res.status(200).json({ success: true, data: folder });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getFolderController = async (
  req: Request,
  res: Response
) => {
  try {
    const folderId = req.params.id as string;
    const folder = await getFolderExplorer({ folderId });
    res.status(200).json({ success: true, data: folder });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};