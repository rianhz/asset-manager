export enum IntegrationType {
    CANVA = 'canva',
    GOOGLE = 'google-drive',
}

export interface IUser {
    _id: string;
    email: string;
    passwordHash?: string; // Optional because Google users won't have one
    googleId?: string;     // Optional because Email users won't have one
    name?: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
    assetIntegrations: Array<IntegrationType>;
}