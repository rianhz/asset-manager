"use client";

import { useDispatch } from "react-redux";
import { setUser } from "@/lib/store/reducers/userSlice";


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