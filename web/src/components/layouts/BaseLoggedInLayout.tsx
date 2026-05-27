"use client";

import React from "react";
import BaseLoggedInNavTop from "@/components/navbar/BaseLoggedInNavTop";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../ui/app-sidebar";

export default function BaseLoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <BaseLoggedInNavTop />

        <main className="flex-1 overflow-y-auto p-6 w-full">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}