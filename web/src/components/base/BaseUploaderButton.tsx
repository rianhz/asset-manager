"use client";

import type { OurFileRouter } from "@/src/app/api/uploadthing/core";
import { UploadButton } from "@/src/lib/upload-thing/uploadThing";
import { Spinner } from "@heroui/react";

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
                <Spinner color="current" size="sm" />
                <span>{uploadProgress}%</span>
              </div>
            );
          }
          
          if (ready) {
            return buttonText;
          } 
          
          return <Spinner color="current" size="sm" />;
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