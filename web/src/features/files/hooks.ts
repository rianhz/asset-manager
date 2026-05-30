import { useMutation, useQuery } from "@tanstack/react-query";
import { uploadFiles, getFile, getAllUserFiles } from "./api";
import { IFile, UploadedFileResponse, UploadFilesPayload } from "./file";

export const useUploadFiles = () => {
  return useMutation<UploadedFileResponse, Error, { files: UploadFilesPayload[] }>({
    mutationFn: ({ files }) => uploadFiles({ files }),
  });
};

export const useGetFile = (fileId: string) => {
  return useQuery<IFile, Error>({
    queryKey: ["file", fileId],
    queryFn: () => getFile({ fileId }),
  });
};

export const useGetAllUserFiles = () => {
  return useQuery<IFile[], Error>({
    queryKey: ["allUserFiles"],
    queryFn: () => getAllUserFiles(),
  });
};