"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, setUser } from "../lib/store/reducers/userSlice";


export default function AuthProvider({
    children,
    initialUser,
}: {
    children: React.ReactNode;
    initialUser: any;
}) {

    const dispatch = useDispatch();

    if (initialUser) {
        dispatch(setUser(initialUser));
    }

    return <>{children}</>;
}