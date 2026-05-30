import { Request, Response } from "express";
import { createFolder, createRootFolder, deleteFolder, editFolder, getDeletedFoldersWithin30Days, getFolderExplorer, getUserFolders, getUserRootFolders, renameFolder, shareFolder, restoreFolder, permanentlyDeleteFolder } from "./folders.service";
export const createRootFolderController = async (
  req: Request,
  res: Response
) => {
  try {
  
    const userId = (req as any).user?.id || (req as any).user?.id;

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

export const getAllUserFoldersController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = (req as any).user?.id || (req as any).user?.id;
    const folders = await getUserFolders(userId);
    res.status(200).json({ success: true, data: folders });
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

export const getUserRootFoldersController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = (req as any).user?.id || (req as any).user?.id;
    const folders = await getUserRootFolders(userId);
    res.status(200).json({ success: true, data: folders });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const editFolderController = async (
  req: Request,
  res: Response
) => {
  try {
    const { folderId, payload } = req.body;
    const folder = await editFolder({ folderId, payload });
    res.status(200).json({ success: true });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const renameFolderController = async (
  req: Request,
  res: Response
) => {
  try {
    const { folderId, name } = req.body;
    await renameFolder({ folderId, name });
    res.status(200).json({ success: true });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteFolderController = async (
  req: Request,
  res: Response
) => {
  try {
    const { folderId } = req.body;
    await deleteFolder({ folderId });
    res.status(200).json({ success: true });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const permanentlyDeleteFolderController = async (
  req: Request,
  res: Response
) => {
  try {
    const folderId = req.params.id as string;
    await permanentlyDeleteFolder({ folderId });
    res.status(200).json({ success: true });
  } catch (error: any) {

    res.status(400).json({ success: false, message: error.message });
  }
};


export const restoreFolderController = async (
  req: Request,
  res: Response
) => {
  try {
    const { folderId } = req.body;
    await restoreFolder({ folderId });
    res.status(200).json({ success: true });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getDeletedFoldersWithin30DaysController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = (req as any).user?.id || (req as any).user?.id;
    const folders = await getDeletedFoldersWithin30Days(userId);
    res.status(200).json({ success: true, data: folders });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};