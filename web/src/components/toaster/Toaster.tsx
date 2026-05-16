"use client";
import { Toaster as SonnerToaster } from "sonner";

interface ToasterProps {
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    duration?: number;
    theme?: "light" | "dark" | "system";
    richColors?: boolean;
 
}

export default function Toaster({
    position = "top-right",
    duration = 3000,
    theme = "light",
    richColors = true,
}: ToasterProps) {
  return <SonnerToaster position={position} duration={duration} theme={theme} richColors={richColors} />;
}