import { useMutation, useQuery } from "@tanstack/react-query";
import { getMyProfile, login, logout, register } from "@/src/features/auth/api";
import { toast } from "sonner";
import { logout as logoutAction, setUser } from "@/src/lib/store/reducers/userSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/src/lib/store/hooks/hooks";
import { AuthResponse } from "./authTypes";
import { IUser } from "@/src/types/users";
import { getProfile } from "../users/api";


export const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: login,

    onSuccess: async (data: AuthResponse) => {
      const user = await getMyProfile();
      dispatch(setUser(user));
      router.push("/dashboard");
    },

    onError: error => {
      toast.error((error as any)?.response?.data?.message || error?.message);
    },
  });
};

export const useRegister = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: register,

    onSuccess: () => {
      toast.success("Account created successfully");
      router.push("/login");
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

export const useGetMe = () => {
  return useQuery<IUser | null, Error>({
    queryKey: ["me"],
    queryFn: async () => {
      return await getProfile();
    },
    retry: false,
  });
};
