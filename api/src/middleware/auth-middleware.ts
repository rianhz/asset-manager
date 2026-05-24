import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../modules/users/users.model";
import { generateAccessToken, generateRefreshToken } from "../helpers/auth-helper";
import bcrypt from "bcryptjs";
import { ACCESS_COOKIE_OPTIONS, ACCESS_TOKEN_EXPIRES_IN, ACCESS_TOKEN_SECRET, REFRESH_COOKIE_OPTIONS, REFRESH_TOKEN_EXPIRES_IN, REFRESH_TOKEN_SECRET } from "../utils/constant";


export const protectRoute = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const accessToken = req.cookies.accessToken;
        const refreshToken = req.cookies.refreshToken;

        if (accessToken) {
            try {
                const decoded = jwt.verify(
                    accessToken,
                    ACCESS_TOKEN_SECRET
                ) as JwtPayload;

                (req as any).user = decoded;

                return next();

            } catch (error: any) {

                if (error.name !== "TokenExpiredError") {
                    res.status(401).json({
                        success: false,
                        message: "Invalid access token",
                    });
                    return;
                }
            }
        }
    

        if (!refreshToken) {
            res.status(401).json({
                success: false,
                message: "Refresh token missing",
            });
            return;
        }

        const decodedRefresh = jwt.verify(
            refreshToken,
            REFRESH_TOKEN_SECRET
        ) as JwtPayload;

        const userId = decodedRefresh.id;

        const user = await UserModel.findById(userId);

        if (!user || !user.refreshToken?.token) {
            res.status(401).json({
                success: false,
                message: "User session not found",
            });
            return;
        }

        const isRefreshTokenMatch = await bcrypt.compare(
            refreshToken,
            user.refreshToken.token
        );

        if (!isRefreshTokenMatch) {
            await UserModel.findByIdAndUpdate(userId, {
                $unset: {
                    refreshToken: "",
                },
            });

            res.clearCookie("accessToken");
            res.clearCookie("refreshToken");

            res.status(401).json({
                success: false,
                message: "Invalid refresh token",
            });

            return;
        }


        const newAccessToken = generateAccessToken(
            userId,
            ACCESS_TOKEN_EXPIRES_IN
        );

        const newRefreshToken = generateRefreshToken(
            userId,
            REFRESH_TOKEN_EXPIRES_IN,
        );

        const hashedRefreshToken = await bcrypt.hash(
            newRefreshToken,
            10
        );

        await UserModel.findByIdAndUpdate(userId, {
            $set: {
                refreshToken: {
                    token: hashedRefreshToken,
                    expiresIn: REFRESH_TOKEN_EXPIRES_IN,
                    createdAt: new Date(),
                },
            },
        });

        res.cookie(
            "accessToken",
            newAccessToken,
            ACCESS_COOKIE_OPTIONS
        );

        res.cookie(
            "refreshToken",
            newRefreshToken,
            REFRESH_COOKIE_OPTIONS
        );

        (req as any).user = decodedRefresh;

        next();
    } catch (error) {
        console.error("protectRoute error:", error);

        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");

        res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }
};