import { Document } from 'mongoose';

export interface IUser {
  id?: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
}

// Extends Mongoose Document for database specific operations
export interface IUserDocument extends IUser, Document {}