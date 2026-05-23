import { api } from "@/src/lib/axios";
import { UserResponse } from "./userTypes";
import { AxiosError } from "axios";

export const getProfile = async () => {
  try {
    const response = await api.get<UserResponse>(`/users/profile`);
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message || error.response?.data.error || 'Failed to get profile');
    }
    throw new Error('Failed to get profile');
  }
};