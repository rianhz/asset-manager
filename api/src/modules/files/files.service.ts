import { Folder } from "../folders/folders.model";
import { UploadFilePayload } from "./files.interfaces";
import { File } from "./files.model";


export const uploadFile = async ({
  folderId,
  name,
  originalName,
  mimeType,
  size,
  uploadthingKey,
  url,
}: UploadFilePayload) => {
  const folder = await Folder.findById(folderId);

  if (!folder) {
    throw new Error("Folder not found");
  }

  const file = await File.create({
    folderId: folder._id,

    rootId: folder.rootId,

    ownerId: folder.ownerId,

    name,

    originalName,

    mimeType,

    size,

    uploadthingKey,

    url,
  });

  return file;
};

export const getFile = async ({
  fileId,
}:{ fileId: string }) => {
  const file = await File.findById(fileId);

  if (!file) {
    throw new Error("File not found");
  }

  return file;
};

export const deleteFile = async ({
  fileId,
}: { fileId: string }) => {
  const file = await File.findById(fileId);

  if (!file) {
    throw new Error("File not found");
  }

  file.isDeleted = true;

  await file.save();

  return {
    success: true,
  };
};