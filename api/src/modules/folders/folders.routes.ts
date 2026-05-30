import { Router } from "express";
import { createFolderController, createRootFolderController, editFolderController, deleteFolderController, getAllUserFoldersController, getFolderController, getUserRootFoldersController, renameFolderController, shareFolderController, getDeletedFoldersWithin30DaysController, restoreFolderController, permanentlyDeleteFolderController } from "./folders.controller";

const router = Router();

router.post("/root", createRootFolderController);
router.post("/child", createFolderController);
router.post("/:id/share", shareFolderController);
router.get("/:id", getFolderController);
router.get("/user/root-folders", getUserRootFoldersController);
router.get("/user/folders", getAllUserFoldersController);
router.put("/:id", editFolderController);
router.patch("/:id/rename", renameFolderController);
router.patch("/:id/delete", deleteFolderController);
router.delete("/:id/permanently-delete", permanentlyDeleteFolderController);
router.patch("/:id/restore", restoreFolderController);
router.get("/user/deleted-folders", getDeletedFoldersWithin30DaysController);
export default router;