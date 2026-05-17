import { Router } from 'express';
import { registerController, loginController, googleCallbackController, getProfileController } from './users.controller';

const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/google/callback', googleCallbackController);
router.get('/profile/:userId', getProfileController);

export const authRoutes = router;