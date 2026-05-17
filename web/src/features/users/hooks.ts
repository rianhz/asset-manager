import { useQuery } from "@tanstack/react-query";
import { getProfile } from "./api";
import { IUser } from "@/src/types/users";

export const useGetProfile = () => {
  return useQuery<IUser, Error>({
    queryKey: ["profile"],
    queryFn: () => getProfile("6a096d4d2ebfb874effed160"),
  });
};