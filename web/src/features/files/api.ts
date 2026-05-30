import { GetAllUserFilesResponse, GetFileResponse, IFile, UploadedFileResponse, UploadFilesPayload } from "./file";
import { api } from "@/lib/axios";



export const uploadFiles = async ({ files }: { files: UploadFilesPayload[] }) => {
  try {
    const response = await api.post<UploadedFileResponse>(
      "/files/upload",
      { files }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFile = async ({ fileId }: { fileId: string }) => {
  try {
    const response = await api.get<GetFileResponse>(
      `/files/${fileId}`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};


export const getAllUserFiles = async () => {
  try {
    const response = await api.get<GetAllUserFilesResponse>(
      `/files/user/files`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
