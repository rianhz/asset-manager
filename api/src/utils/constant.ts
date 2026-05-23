import dotenv from 'dotenv';
dotenv.config();

export const ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_SECRET as string;
export const REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_SECRET as string;

export const ACCESS_COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    maxAge: 15 * 60 * 1000,
};

export const REFRESH_COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    maxAge: 30 * 24 * 60 * 60 * 1000,
};