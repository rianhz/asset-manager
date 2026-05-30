import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFolder, createRootFolder, deleteFolder, editFolder, getDeletedFoldersWithin30Days, getFolderExplorer, getUserFolders, getUserRootFolders, permanentlyDeleteFolder, renameFolder, restoreFolder } from "./api";
import { CreateFolderPayload, CreateRootFolderPayload, FolderExplorer, IFolder } from "./folders";

export const useCreateRootFolder = () => {
  return useMutation<IFolder, Error, CreateRootFolderPayload>({
    mutationFn: createRootFolder,
  });
};

export const useCreateFolder = () => {
  return useMutation<IFolder, Error, CreateFolderPayload>({
    mutationFn: createFolder,
  });
};

export const useGetFolderExplorer = (folderId: string) => {
  return useQuery<FolderExplorer, Error>({
    queryKey: ["folderExplorer", folderId],
    queryFn: () => getFolderExplorer({ folderId }),
  });
};

export const useGetUserRootFolders = () => {
  return useQuery<IFolder[], Error>({
    queryKey: ["userRootFolders"],
    queryFn: () => getUserRootFolders(),
  });
};

export const useGetUserFolders = () => {
  return useQuery<IFolder[], Error>({
    queryKey: ["userFolders"],
    queryFn: () => getUserFolders(),
  });
};

export const useEditFolder = () => {
  return useMutation<void, Error, IFolder>({
    mutationFn: editFolder,
  });
};

export const useRenameFolder = () => {
  return useMutation<void, Error, { folderId: string, name: string }>({
    mutationFn: renameFolder,
  });
};

export const useDeleteFolder = () => {
  return useMutation<void, Error, { folderId: string }>({
    mutationFn: deleteFolder,
  });
};

export const usePermanentlyDeleteFolder = () => {
  return useMutation<void, Error, { folderId: string }>({
    mutationFn: permanentlyDeleteFolder,
  });
};

export const useRestoreFolder = () => {
  return useMutation<void, Error, { folderId: string }>({
    mutationFn: restoreFolder,
  });
};

export const useGetDeletedFoldersWithin30Days = () => {
  return useQuery<IFolder[], Error>({
    queryKey: ["deletedFoldersWithin30Days"],
    queryFn: () => getDeletedFoldersWithin30Days(),
  });
};