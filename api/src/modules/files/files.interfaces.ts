export interface IFile {
    _id: string;
    name: string;
    originalName: string;
    mimeType: string;
    size: number;
    folderId: string;
    ownerId: string;
    visibility: "public" | "private";
    members: {
        userId: string;
        role: "owner" | "editor" | "viewer";
    }[];
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface UploadFilePayload {
    folderId: string;
    name: string;
    originalName: string;
    mimeType: string;
    size: number;
    uploadthingKey: string;
    url: string;
}
