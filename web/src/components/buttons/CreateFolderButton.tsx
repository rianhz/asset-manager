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
import { Input } from "@/components/ui/input"
import BaseButton from "../base/BaseButton"
import { useForm } from "react-hook-form"
import { CreateFolderFormValues, createFolderSchema } from "@/features/folders/folderSchema"
import { useCreateRootFolder, useCreateFolder } from "@/features/folders/hooks"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useQueryClient } from "@tanstack/react-query"

export function CreateFolderButton({ parentId }: { parentId?: string }) {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateFolderFormValues>({
    resolver: zodResolver(createFolderSchema),
  });
  const { mutate: createFolderMutation, isPending: isCreatingFolder } = useCreateRootFolder();
  const { mutate: createChildFolderMutation, isPending: isCreatingChildFolder } = useCreateFolder();
  const queryClient = useQueryClient();

  const onSubmit = (data: any) => {
    if (parentId) {
      createChildFolderMutation({ ...data, parentId }, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["folderExplorer", parentId] });
          setOpen(false);
          toast.success("Folder created successfully");
        },
        onError: (error) => {
          toast.error((error as any)?.response?.data?.message || error?.message);
        },
      });
    } else {
      createFolderMutation(data, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["userRootFolders"] });
          setOpen(false);
          toast.success("Folder created successfully");
        },
        onError: (error) => {
          toast.error((error as any)?.response?.data?.message || error?.message);
        },
      });
    }
  }

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create Folder</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Folder</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Create a new folder to organize your files.
        </DialogDescription>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input type="text" id="folder-name" placeholder="Example: My Folder Name" {...register("name")} />
          </div>
          {errors.name && (
            <p className="mt-2 text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </form>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <BaseButton variant="outline">Cancel</BaseButton>
          </DialogClose>
          <BaseButton loading={isCreatingFolder || isCreatingChildFolder} type="submit" onClick={handleSubmit(onSubmit)}>Create</BaseButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
