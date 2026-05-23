import { useQuery } from "@tanstack/react-query";
import { getProfile } from "./api";
import { IUser } from "@/src/types/users";

export const useGetProfile = () => {
  return useQuery<IUser | null, Error>({
    queryKey: ["profile"],
    queryFn: async () => {
      try {
        return await getProfile();
      } catch (error) {
        return null;
      }
    },
    retry: false,
  });
};