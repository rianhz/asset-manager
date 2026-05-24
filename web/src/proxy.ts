import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get("accessToken");

    const isAuthPage =
        request.nextUrl.pathname.startsWith("/login") ||
        request.nextUrl.pathname.startsWith("/register");

    const isProtectedPage =
        request.nextUrl.pathname.startsWith("/dashboard");

    if (!accessToken && isProtectedPage) {
        return NextResponse.redirect(
            new URL("/login", request.url)
        );
    }

    if (accessToken && isAuthPage) {
        return NextResponse.redirect(
            new URL("/dashboard", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/login",
        "/register",
    ],
};