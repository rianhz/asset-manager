import { Router } from 'express';
import { getProfileController } from './users.controller';

const router = Router();

router.get('/profile', getProfileController);

export const usersRoutes = router;