"use client";

import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton } from "@/lib/upload-thing/uploadThing";
import { Loader2 } from "lucide-react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "ghost"
  | "danger"
  | "danger-soft";
export default function BaseUploaderButton({
  endpoint,
  onComplete,
  onError,
  buttonText = "Choose file",
  variant = "primary",
  allowedContentClasses = "text-white",
}: {
  endpoint: keyof OurFileRouter;
  onComplete: (res: any) => void;
  onError: (error: Error) => void;
  buttonText?: string;
  variant?: ButtonVariant;
  allowedContentClasses?: string;
}) {
  return (
    <UploadButton
      className="custom-upload-button"
      endpoint={endpoint}
      onClientUploadComplete={onComplete}
      onUploadError={onError}
      content={{
        button({ ready, isUploading, uploadProgress }) {
          if (isUploading) {
            return (
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{uploadProgress}%</span>
              </div>
            );
          }
          
          if (ready) {
            return buttonText;
          } 
          
          return <Loader2 className="w-4 h-4 animate-spin" />;
        },
      }}
      appearance={{
        button: variant,
        allowedContent: allowedContentClasses,
      }}
      uploadProgressGranularity="fine"
    />
  );
}