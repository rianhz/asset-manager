import { Router } from "express";
import { getAllUserFilesController, getFileController, uploadFileController } from "./files.controller";

const router = Router();

router.post('/upload', uploadFileController);
router.get('/:id', getFileController);
router.get("/user/files", getAllUserFilesController);

export default router;