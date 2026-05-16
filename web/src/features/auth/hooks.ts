import { useMutation } from "@tanstack/react-query";

import { login } from "@/app/features/auth/api";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,

    onSuccess: data => {
      console.log("Login success", data);

      localStorage.setItem(
        "accessToken",
        data.accessToken
      );
    },

    onError: error => {
      console.error(error);
    },
  });
};