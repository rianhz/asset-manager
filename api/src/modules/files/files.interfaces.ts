export interface IFile {
    _id: string;
    name: string;
    originalName: string;
    mimeType: string;
    size: number;
    folderId: string | null;
    ownerId: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface UploadFilePayload {
    folderId: string | null;
    name: string;
    originalName: string;
    mimeType: string;
    size: number;
    uploadthingKey: string;
    url: string;
}
