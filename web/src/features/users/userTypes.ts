import { IUser } from "@/src/types/users";

export interface UserResponse {
  success: boolean;
  data: IUser;
}