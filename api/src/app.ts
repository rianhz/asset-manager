// src/app.ts
import express from 'express';
import cors from 'cors';
import { authRoutes } from './modules/authentication/authentication.routes';
import { usersRoutes } from './modules/users/users.routes';
import { corsOptions } from './config/cors';

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);

export default app;