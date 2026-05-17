"use client";

import { useAppSelector } from "@/src/lib/store/hooks/hooks";
import { useEffect } from "react";

export default function DashboardPage() {
  const currentUser = useAppSelector((state) => state.currentUser.user);
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-primary">Dashboard</h1>
    </main>
  );
}