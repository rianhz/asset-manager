// app/dashboard/layout.tsx
"use client";

import React, { useState } from "react";
// import BaseLoggedInNavTop from "@/src/components/navbar/BaseLoggedInNavTop";
// import DashboardSidebar from "@/src/components/sidebar/DashboardSidebar";

export default function BaseLoggedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Shared state to toggle the sidebar menu open/closed on mobile viewports
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden bg-background">
      
      {/* Top Fixed Navbar */}
      {/* <DashboardNavbar 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} 
      /> */}

      {/* Main Container Area */}
      <div className="flex h-full w-full overflow-hidden">
        
        {/* Left Side Sidebar */}
        {/* <DashboardSidebar isSidebarOpen={isSidebarOpen} /> */}

        {/* Scrollable Core Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          {children}
        </main>
        
      </div>
    </div>
  );
}