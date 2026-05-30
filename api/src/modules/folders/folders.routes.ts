import { Router } from "express";
import { createFolderController, createRootFolderController, getFolderController, shareFolderController } from "./folders.controller";

const router = Router();

router.post("/root", createRootFolderController);
router.post("/child", createFolderController);
router.post("/:id/share", shareFolderController);
router.get("/:id", getFolderController);

export default router;