import { Router } from 'express';
import { getCanvaToken, introspectCanvaToken, refreshCanvaToken, revokeCanvaToken, getDesigns, getDesignById, createNewDesign } from './canva.controller';

const router = Router();

router.post('/get-token', getCanvaToken);
router.post('/introspect-token', introspectCanvaToken);
router.post('/refresh-token', refreshCanvaToken);
router.post('/revoke-token', revokeCanvaToken);
router.post('/designs', getDesigns);
router.post('/design', getDesignById);
router.post('/create-design', createNewDesign);

export const authRoutes = router;