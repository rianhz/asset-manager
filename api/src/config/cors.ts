import dotenv from 'dotenv';
dotenv.config();

export const corsOptions = {
  origin: process.env.FRONTEND_URL, 
  credentials: true, 
  
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};