import { Folder } from "../folders/folders.model";
import { UploadFilePayload } from "./files.interfaces";
import { File } from "./files.model";


export const uploadFiles = async ({files, userId}: {files: UploadFilePayload[], userId: string}) => {
  const uploadedFiles = await File.insertMany(files.map((file) => ({
    ...file,
    folderId: file.folderId ?? null,
    isDeleted: false,
    ownerId: userId,
  })));
  return uploadedFiles;
};

export const getFile = async ({ fileId }: { fileId: string }) => {
  const file = await File.findById(fileId);
  return file;
};

export const getAllUserFiles = async ({ userId }: { userId: string }) => {
  const files = await File.find({ ownerId: userId, isDeleted: false });

  return files;
};