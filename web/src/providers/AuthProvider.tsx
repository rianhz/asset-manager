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

    useEffect(() => {

        if (initialUser) {
            dispatch(setUser(initialUser));
        } else {
            dispatch(logout());
        }

    }, [dispatch, initialUser]);

    return <>{children}</>;
}