import { IFile } from "../files/files.interfaces";

export interface IFolder {
    _id: string;
    name: string;
    parentId: null | string;
    rootId: string;
    ancestors: {
        _id: string;
        name: string;
    }[];
    depth: number;
    ownerId: string;
    isRootShared: boolean;
    shareToken: string;
    allowPublicUpload: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    folders: IFolder[];
    files: IFile[];
}

export interface CreateFolderPayload {
  parentId: string;
  name: string;
}

export interface CreateRootFolderPayload {
  userId: string;
  name: string;
}

export interface ShareFolderPayload {
  folderId: string;
  userId: string;
}

export interface GetFolderExplorerPayload {
  folderId: string;
}