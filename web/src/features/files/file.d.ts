export interface IFile {
  _id: string;
  name: string;
  originalName: string;
  mimeType: string;
  url: string;
  size: number;
  folderId: string | null;
  ownerId: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UploadedFileResponseFromUploadThing {
  name: string;
  size: number;
  key: string;
  lastModified: number;
  serverData: {
    uploadedBy: string;
  };
  ufsUrl: string;
  customId: string | null;
  type: string;
  fileHash: string;
}

export interface UploadedFileResponse {
  message: string;
  success: boolean;
  data: IFile[];
}

export interface GetFileResponse {
  success: boolean;
  data: IFile;
}

export interface UploadFilesPayload {
  folderId: string | null;
  name: string;
  originalName: string;
  mimeType: string;
  size: number;
  uploadthingKey: string;
  url: string;
}

export interface GetFilePayload {
  fileId: string;
}

export interface GetAllUserFilesResponse {
  success: boolean;
  data: IFile[];
}