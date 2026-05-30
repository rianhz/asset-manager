import { Router } from "express";
import { deleteFileController, getFileController, uploadFileController } from "./files.controller";

const router = Router();

router.post('/upload', uploadFileController);
router.get('/:id', getFileController);
router.delete('/:id', deleteFileController);

export default router;