import { IntegrationType } from "@/types/users";

export interface IUser {
  _id: string;
  email: string;
  passwordHash?: string;
  googleId?: string;
  name?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  assetIntegrations: IntegrationType[];
}
export interface UserResponse {
  success: boolean;
  data: IUser;
}