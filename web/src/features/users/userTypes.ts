import { IUser } from "@/types/users";

export interface UserResponse {
  success: boolean;
  data: IUser;
}