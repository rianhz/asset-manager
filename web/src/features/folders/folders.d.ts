export interface IFolder {
  _id: string;
  name: string;
  parentId: string;
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
}

export interface IFoldersResponse {
  success: boolean;
  data: IFolder[];
}

export interface CreateFolderPayload {
  parentId: string;
  name: string;
}

export interface CreateRootFolderPayload {
  userId: string;
  name: string;
}

export interface GetFolderExplorerPayload {
  folderId: string;
}

export interface FolderExplorer{
  _id: string;
  name: string;
  parentId: string;
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
  folder: IFolder;
  breadcrumbs: {
    _id: string;
    name: string;
  }[];
}

export interface GetFolderExplorerResponse {
  success: boolean;
  data: FolderExplorer;
}