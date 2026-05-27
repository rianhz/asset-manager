"use client";

import { Moon, Sun } from "@gravity-ui/icons";
import { useTheme } from "next-themes";
import BaseButton from "@/components/base/BaseButton";
import { useEffect, useState } from "react";

export const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 bg-transparent" />; 
  }

  const isDark = theme === "dark";

  return (
    <BaseButton
      variant="ghost"
      size="md"
      isIconOnly
      rounded="rounded-lg"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      type="button"
    >
      {isDark ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </BaseButton>
  );
};