import { Schema, model } from 'mongoose';
import { IUser } from './users.interface';

export const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  googleId: { type: String, required: false, default: null },
  name: { type: String, required: false, default: null },
  avatar: { type: String, required: false, default: null },
  assetIntegrations: { type: [String], default: [] },
}, { timestamps: true });

export const UserModel = model<IUser>('User', UserSchema);