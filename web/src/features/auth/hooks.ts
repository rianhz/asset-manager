import { useMutation } from "@tanstack/react-query";
import { login, register } from "@/src/features/auth/api";
import { toast } from "sonner";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,

    onSuccess: data => {
      localStorage.setItem(
        "accessToken",
        data.accessToken
      );
    },

    onError: error => {
      toast.error((error as any)?.response?.data?.message || error?.message);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,

    onSuccess: () => {
      toast.success("Account created successfully");
    },

    onError: error => {
      toast.error((error as any)?.response?.data?.message || error?.message);
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => {
      localStorage.removeItem("accessToken");
      return Promise.resolve();
    },

    onError: error => {
      console.error(error);
    },
  });
};