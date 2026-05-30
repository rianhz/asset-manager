"use client";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import BaseButton from "../base/BaseButton"
import { useMemo, useState } from "react"
import { toast } from "sonner"
import { useQueryClient } from "@tanstack/react-query"
import BaseUploaderDropzone from "../base/BaseUploaderDropzone"
import { useUploadFiles } from "@/features/files/hooks"
import { UploadedFileResponseFromUploadThing } from "@/features/files/file"

export function CreateFileButton({ parentId }: { parentId?: string }) {
  const [open, setOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { mutate: createFileMutation, isPending: isCreatingFile } = useUploadFiles();
  const [uploadedFile, setUploadedFile] = useState<UploadedFileResponseFromUploadThing[]>([]);
  const queryClient = useQueryClient();

  const isValid = useMemo(() => {
    return uploadedFile.length > 0
  }, [uploadedFile, parentId]);

  const handleSubmit = () => {
    const payload = uploadedFile.map((file) => ({
      name: file.name,
      originalName: file.name,
      mimeType: file.type,
      size: file.size,
      uploadthingKey: file.key,
      url: file.ufsUrl,
      folderId: parentId ?? null,
    }));
    createFileMutation({files: payload}, {
      onSuccess: (data) => {
        toast.success(data.message);
        setOpen(false);
        setUploadedFile([]);
        queryClient.invalidateQueries({ queryKey: ["userFiles"] });
      },
      onError: (error) => {
        toast.error((error as any)?.response?.data?.message || error?.message);
      },
    });
  }

  const handleUploadComplete = (res: UploadedFileResponseFromUploadThing[]) => {
    setUploadedFile((prev) => [...prev, ...res]);
  }

  const handleUploadError = (error: Error) => {
    toast.error((error as any)?.response?.data?.message || error?.message);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Upload File</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload File</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Upload a new file to your dashboard.
        </DialogDescription>
        <BaseUploaderDropzone endpoint="imageUploader" onComplete={handleUploadComplete} onError={handleUploadError} setIsUploadingParent={setIsUploading} />
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <BaseButton variant="outline">Cancel</BaseButton>
          </DialogClose>
          <BaseButton type="submit" onClick={handleSubmit} disabled={isUploading || !isValid} loading={isCreatingFile}>Create</BaseButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
