import express from 'express';
import cors from 'cors';
import { authRoutes } from './modules/authentication/authentication.routes';
import { usersRoutes } from './modules/users/users.routes';
import { corsOptions } from './config/cors';
import { protectRoute } from './middleware/auth-middleware';
import helmet from 'helmet';
import cookieParser from "cookie-parser";
import filesRoutes from './modules/files/files.routes';
import foldersRoutes from './modules/folders/folders.routes';

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(helmet())
app.use(cookieParser());
app.use('/auth', authRoutes);
app.use('/users',protectRoute, usersRoutes);
app.use('/folders', foldersRoutes);
app.use('/files', filesRoutes);

export default app;