import { api } from "@/lib/axios";
import { RawAxiosRequestHeaders } from "axios";

import {
  LoginPayload,
  RegisterPayload,
  AuthResponse,
} from "@/features/auth/authTypes";
import { UserResponse } from "../users/userTypes";

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

export const logout = async () => {
  try {
    await api.post<void>(
      "/auth/logout"
    );

  } catch (error) {
    throw error;
  }
};


export const getMyProfile = async (
  headers?: RawAxiosRequestHeaders
) => {
  try {

    const response = await api.get<UserResponse>(
      "/auth/me",
      {
        headers,
      }
    );

    return response.data.data;

  } catch (error) {
    throw error;
  }
};