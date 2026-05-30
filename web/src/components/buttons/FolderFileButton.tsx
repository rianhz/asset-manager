"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import BaseButton from "../base/BaseButton";
import { Folder, Pencil, RotateCcw, Trash } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogDescription, DialogFooter } from "../ui/dialog";
import { useState } from "react";
import { Input } from "../ui/input";
import { renameFormSchema, RenameFormValues } from "@/features/folders/folderSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDeleteFolder, usePermanentlyDeleteFolder, useRenameFolder, useRestoreFolder } from "@/features/folders/hooks";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { IFolder } from "@/features/folders/folders";
import { IFile } from "@/features/files/file";
import { BaseImage } from "../base/BaseImage";
import { PreviewImageButton } from "./PreviewImageButton";

interface IFolderProps extends IFolder {
  type: "folder";
}

interface IFileProps extends IFile {
  type: "file";
}

type FolderFileProps = IFolderProps | IFileProps;

interface FolderFileButtonProps {
  item: FolderFileProps;
  enableRestore?: boolean;
  enableRename?: boolean;
  enableDelete?: boolean;
  enablePermanentlyDelete?: boolean;
}

export function FolderFileButton({ 
  item, 
  enableRestore = false, 
  enableRename = true, 
  enableDelete = true, 
  enablePermanentlyDelete = false 
}: FolderFileButtonProps) {
  const [openRename, setOpenRename] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openRestore, setOpenRestore] = useState(false);
  const [openPermanentlyDelete, setOpenPermanentlyDelete] = useState(false);

  const { mutate: renameFolder, isPending } = useRenameFolder();
  const { mutate: deleteFolder, isPending: isPendingDelete } = useDeleteFolder();
  const { mutate: restoreFolder, isPending: isPendingRestore } = useRestoreFolder();
  const { mutate: permanentlyDeleteFolder, isPending: isPendingPermanentlyDelete } = usePermanentlyDeleteFolder();
  const queryClient = useQueryClient();
 
  const { register, handleSubmit, formState: { errors } } = useForm<RenameFormValues>({
    resolver: zodResolver(renameFormSchema),
    defaultValues: {
      name: item.name,
    },
  });

  const onSubmit = (data: RenameFormValues) => {
    renameFolder({ folderId: item._id, name: data.name }, {
      onSuccess: () => {
        toast.success("Folder renamed successfully");
        setOpenRename(false);
        queryClient.invalidateQueries({ queryKey: ["folderExplorer"] });
        queryClient.invalidateQueries({ queryKey: ["userFolders"] });
        queryClient.invalidateQueries({ queryKey: ["userRootFolders"] });
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const onDelete = () => {
    deleteFolder({ folderId: item._id }, {
      onSuccess: () => {
        toast.success("Folder deleted successfully");
        setOpenDelete(false);
        queryClient.invalidateQueries({ queryKey: ["folderExplorer"] });
        queryClient.invalidateQueries({ queryKey: ["userFolders"] });
        queryClient.invalidateQueries({ queryKey: ["userRootFolders"] });
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const onRestore = () => {
    restoreFolder({ folderId: item._id }, {
      onSuccess: () => {
        toast.success("Folder restored successfully");
        setOpenRestore(false);
        queryClient.invalidateQueries({ queryKey: ["deletedFoldersWithin30Days"] });
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  };

  const onPermanentlyDelete = () => {
    permanentlyDeleteFolder({ folderId: item._id }, {
      onSuccess: () => {
        toast.success("Folder permanently deleted successfully");
        setOpenPermanentlyDelete(false);
        queryClient.invalidateQueries({ queryKey: ["deletedFoldersWithin30Days"] });
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  };

  const hrefPath = item.type === "folder" ? `/folders/${item._id}` : `/files/${item._id}`;

  return (
    <>
      <Dialog open={openRename} onOpenChange={setOpenRename}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Rename the item to a new name.
          </DialogDescription>
          <form id="rename-form" onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("name")} placeholder="Enter new name" />
            {errors.name && (
              <p className="text-sm text-danger">
                {errors.name.message}
              </p>
            )}
          </form>
          <DialogFooter>
            <BaseButton variant="outline" onClick={() => setOpenRename(false)}>Cancel</BaseButton>
            <BaseButton type="submit" loading={isPending} onClick={handleSubmit(onSubmit)}>Rename</BaseButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Are you sure you want to delete this item?
          </DialogDescription>
          <DialogFooter>
            <BaseButton variant="outline" onClick={() => setOpenDelete(false)}>Cancel</BaseButton>
            <BaseButton variant="danger" loading={isPendingDelete} onClick={onDelete}>Delete</BaseButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={openRestore} onOpenChange={setOpenRestore}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Restore</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Are you sure you want to restore this item?
          </DialogDescription>
          <DialogFooter>
            <BaseButton variant="outline" onClick={() => setOpenRestore(false)}>Cancel</BaseButton>
            <BaseButton loading={isPendingRestore} onClick={onRestore}>Restore</BaseButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={openPermanentlyDelete} onOpenChange={setOpenPermanentlyDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Permanently Delete</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Are you sure you want to permanently delete this item?
          </DialogDescription>
          <DialogFooter>
            <BaseButton variant="outline" onClick={() => setOpenPermanentlyDelete(false)}>Cancel</BaseButton>
            <BaseButton variant="danger" loading={isPendingPermanentlyDelete} onClick={onPermanentlyDelete}>Delete</BaseButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <ContextMenu>
        <ContextMenuTrigger>
          <BaseButton variant="outline" asChild className="w-30 h-30 min-w-0 p-1 rounded-lg">
            {item.type === "folder" ? (
              <Link 
                href={hrefPath} 
                className="flex flex-col items-center justify-center w-30 min-w-0 relative"
              >
                <Folder className="size-16 mb-2" />
                
                <span className="w-full text-center text-sm font-medium truncate px-1">
                  {item.name}
                </span>
              </Link>
            ) : (
              <PreviewImageButton image={item.url} label={item.name} size={64} height={64} className="w-30 h-30 min-w-0 p-1 rounded-lg" />
            )}
          </BaseButton>
        </ContextMenuTrigger>
        <ContextMenuContent side="left">
          <ContextMenuGroup>
            {enableRename && (
              <ContextMenuItem onClick={() => setOpenRename(true)} className="cursor-pointer">
                <Pencil className="size-4 mr-2" />
                Rename
              </ContextMenuItem>
            )}
            {enableRestore && (
              <ContextMenuItem onClick={() => setOpenRestore(true)} className="cursor-pointer">
                <RotateCcw className="size-4 mr-2" />
                Restore
              </ContextMenuItem>
            )}
            {enableDelete && (
              <ContextMenuItem variant="destructive" onClick={() => setOpenDelete(true)} className="cursor-pointer">
                <Trash className="size-4 mr-2" />
                Delete
              </ContextMenuItem>
            )}
            {enablePermanentlyDelete && (
              <ContextMenuItem variant="destructive" onClick={() => setOpenPermanentlyDelete(true)} className="cursor-pointer">
                <Trash className="size-4 mr-2" />
                Delete Permanently
              </ContextMenuItem>
            )}
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </>
  );
}