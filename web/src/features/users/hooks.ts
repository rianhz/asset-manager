import { useQuery } from "@tanstack/react-query";
import { getProfile } from "./api";
import { IUser } from "@/src/types/users";

export const useGetProfile = (userId: string) => {
  return useQuery<IUser, Error>({
    queryKey: ["profile"],
    queryFn: () => getProfile(userId),
  });
};