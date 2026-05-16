import { Schema, model } from 'mongoose';
import { IUserDocument } from './users.interface';

const UserSchema = new Schema<IUserDocument>({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const UserModel = model<IUserDocument>('User', UserSchema);