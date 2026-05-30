"use client";

import { useState } from "react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadDropzone } from "@/lib/upload-thing/uploadThing";
import { Loader2 } from "lucide-react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "ghost"
  | "danger"
  | "danger-soft";

interface BaseUploaderDropzoneProps {
  endpoint: keyof OurFileRouter;
  onComplete: (res: any) => void;
  onError: (error: Error) => void;
  setIsUploadingParent: (loading: boolean) => void; // Prop received from parent
  buttonText?: string;
  variant?: ButtonVariant;
  allowedContentClasses?: string;
}

export default function BaseUploaderDropzone({
  endpoint,
  onComplete,
  onError,
  setIsUploadingParent,
  allowedContentClasses = "text-default-400 text-xs mt-1",
}: BaseUploaderDropzoneProps) {
  // Local state to keep track of progress percentage for the UI
  const [progress, setProgress] = useState<number>(0);
  const [isUploadingLocal, setIsUploadingLocal] = useState<boolean>(false);

  return (
    <div className="w-full space-y-4">
      <UploadDropzone
        config={{ mode: 'auto' }}
        endpoint={endpoint}
        onUploadBegin={() => {
          setIsUploadingLocal(true);
          setIsUploadingParent(true);
        }}
        onUploadProgress={(p) => {
          setProgress(p);
        }}
        onClientUploadComplete={(res) => {
          setIsUploadingLocal(false);
          setIsUploadingParent(false);
          setProgress(0);
          onComplete(res);
        }}
        onUploadError={(err) => {
          setIsUploadingLocal(false);
          setIsUploadingParent(false);
          setProgress(0);
          onError(err);
        }}
        className="custom-upload-dropzone border-2 border-dashed border-default-200 rounded-lg p-6"
        content={{
          label() {
            if (isUploadingLocal) {
              return (
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  <span className="text-sm font-medium text-default-600">
                    Uploading your file...
                  </span>
                </div>
              );
            }
            return (
              <span className="text-sm font-medium text-default-600">
                Drag & drop your files here
              </span>
            );
          },
        }}
        appearance={{
          button: 'hidden', // Kept hidden as requested
          allowedContent: allowedContentClasses,
          container: "flex flex-col items-center justify-center p-6 min-h-[160px]",
          label: "mb-2 text-center",
        }}
      />

      {/* Custom Progress Bar UI */}
      {isUploadingLocal && (
        <div className="w-full space-y-1 px-1">
          <div className="flex justify-between text-xs text-default-500 font-medium">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-default-100 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-150 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}