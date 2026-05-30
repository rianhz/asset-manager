import { CreateFolderPayload, CreateRootFolderPayload, GetFolderExplorerPayload, GetFolderExplorerResponse, IFolder, IFoldersResponse } from "./folders";
import { api } from "@/lib/axios";

export const createRootFolder = async (payload: CreateRootFolderPayload) => {
  try {
    const response = await api.post<IFolder>(
      "/folders/root",
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createFolder = async (payload: CreateFolderPayload) => {
  try {
    const response = await api.post<IFolder>(
      "/folders/child",
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFolderExplorer = async (payload: GetFolderExplorerPayload) => {
  try {
    const response = await api.get<GetFolderExplorerResponse>(
      `/folders/${payload.folderId}`
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getUserFolders = async () => {
  try {
    const response = await api.get<IFoldersResponse>("/folders/user/folders");
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getUserRootFolders = async () => {
  try {
    const response = await api.get<IFoldersResponse>("/folders/user/root-folders");
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const editFolder = async (payload: IFolder) => {
  try {
    const response = await api.put<void>(
      `/folders/${payload._id}`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const renameFolder = async (payload: { folderId: string, name: string }) => {
  try {
    const response = await api.patch<void>(
      `/folders/${payload.folderId}/rename`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error;  
  }
};

export const deleteFolder = async (payload: { folderId: string }) => {
  try {
    const response = await api.patch<void>(
      `/folders/${payload.folderId}/delete`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const permanentlyDeleteFolder = async (payload: { folderId: string }) => {
  try {
    const response = await api.delete<void>(
      `/folders/${payload.folderId}/permanently-delete`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const restoreFolder = async (payload: { folderId: string }) => {
  try {
    const response = await api.patch<void>(
      `/folders/${payload.folderId}/restore`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDeletedFoldersWithin30Days = async () => {
  try {
    const response = await api.get<IFoldersResponse>("/folders/user/deleted-folders");
    return response.data.data;
  } catch (error) {
    throw error;
  }
};