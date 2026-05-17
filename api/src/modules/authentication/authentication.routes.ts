import { Router } from 'express';
import { registerController, loginController, googleCallbackController } from './authentication.controller';

const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/google/callback', googleCallbackController);

export const authRoutes = router;