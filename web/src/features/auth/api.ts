import { api } from "@/src/lib/axios";

import {
  LoginPayload,
  RegisterPayload,
  AuthResponse,
} from "@/src/features/auth/authTypes";

export const login = async (
  payload: LoginPayload
) => {
  try {
    const response = await api.post<AuthResponse>(
      "/auth/login",
      payload
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (
  payload: RegisterPayload
) => {
  try {
    const response = await api.post<AuthResponse>(
      "/auth/register",
      payload
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};