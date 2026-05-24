"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ProfileDropdown } from "../dropdown/ProfileDropdown";
import { DarkModeToggle } from "../toggler/DarkModeToggle";
import { useSidebar } from "../ui/sidebar";


export default function BaseLoggedInNavTop() {
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="fixed top-0 right-0 w-full md:w-[calc(100vw-var(--sidebar-width))]">
      <header className="flex h-12 items-center justify-between px-6">
        
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>

        </div>

        
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <ProfileDropdown />
        </div>
        
      </header>
    </nav>
  );
}