import { useMutation } from "@tanstack/react-query";
import { login, logout, register } from "@/src/features/auth/api";
import { toast } from "sonner";
import { logout as logoutAction, setUser } from "@/src/lib/store/reducers/userSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/src/lib/store/hooks/hooks";
import { AuthResponse } from "./authTypes";
import { getProfile } from "../users/api";


export const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: login,

    onSuccess: async (data: AuthResponse) => {
      const user = await getProfile(data.userId);
      dispatch(setUser(user));
      router.push("/dashboard");
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
  const router = useRouter();
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: logout,

    onSuccess: () => {
      dispatch(logoutAction());
      router.push("/login");
    },

    onError: error => {
      toast.error((error as any)?.response?.data?.message || error?.message);
    },
  });
};