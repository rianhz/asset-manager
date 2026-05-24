"use client";

import type { OurFileRouter } from "@/src/app/api/uploadthing/core";
import { UploadDropzone } from "@/src/lib/upload-thing/uploadThing";
import { Spinner } from "@heroui/react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "ghost"
  | "danger"
  | "danger-soft";

export default function BaseUploaderDropzone({
  endpoint,
  onComplete,
  onError,
  buttonText = "Choose file",
  variant = "primary",
  allowedContentClasses = "text-default-400 text-xs mt-1",
}: {
  endpoint: keyof OurFileRouter;
  onComplete: (res: any) => void;
  onError: (error: Error) => void;
  buttonText?: string;
  variant?: ButtonVariant;
  allowedContentClasses?: string;
}) {
  return (
    <UploadDropzone
      config={{ mode: 'auto' }}
      endpoint={endpoint}
      onClientUploadComplete={onComplete}
      onUploadError={onError}
      className="custom-upload-dropzone"
      content={{
        label() {
          return <span className="text-sm font-medium text-default-600">Drag & drop your files here</span>;
        },
        button({ ready, isUploading, uploadProgress, files, fileTypes, isDragActive }) {

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
        button: 'hidden',
        allowedContent: allowedContentClasses,
        container: "flex flex-col items-center justify-center",
        label: "mb-2 text-center",
      }}
      uploadProgressGranularity="fine"
    />
  );
}