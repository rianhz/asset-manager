import { Router } from 'express';
import { getProfileController } from './users.controller';

const router = Router();

router.get('/profile/:userId', getProfileController);

export const usersRoutes = router;