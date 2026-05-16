import { api } from "@/src/lib/axios";

import {
  LoginPayload,
  RegisterPayload,
  AuthResponse,
} from "@/src/features/auth/authTypes";

export const login = async (
  payload: LoginPayload
) => {
  const response = await api.post<AuthResponse>(
    "/auth/login",
    payload
  );

  return response.data;
};

export const register = async (
  payload: RegisterPayload
) => {
  const response = await api.post<AuthResponse>(
    "/auth/register",
    payload
  );

  return response.data;
};