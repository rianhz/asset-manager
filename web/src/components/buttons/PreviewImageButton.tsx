"use client"
import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "../ui/dialog";
import { BaseImage } from "../base/BaseImage";
import { cn } from "@/lib/utils";

export function PreviewImageButton({ image, label, size = 100, height = 100, className = "" }: { image: string, label: string, size?: number, height?: number, className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className={cn("flex flex-col grow cursor-pointer items-center justify-center w-30 min-w-0 p-1 rounded-lg", className)}>
          <BaseImage image={image} width={size} height={height} className="h-16 w-full object-cover" />
          <span className="w-full text-center text-sm font-medium truncate px-1 mt-2">
            {label}
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
        </DialogHeader>
       <BaseImage image={image} width={400} height={400} className="w-full h-full object-contain" />
      </DialogContent>
    </Dialog>
  );
}