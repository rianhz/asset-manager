"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useGetProfile } from "../features/users/hooks";
import { logout, setUser } from "../lib/store/reducers/userSlice";

import LoadingSpinner from "../components/loader/LoadingSpinner";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();

  const {
    data: profile,
    isLoading,
  } = useGetProfile();

  useEffect(() => {
    if (profile) {
      dispatch(setUser(profile));
    }
  }, [dispatch, profile]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return <>{children}</>;
}