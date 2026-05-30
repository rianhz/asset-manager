"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { CreateFolderButton } from "@/components/buttons/CreateFolderButton";
import { useGetFolderExplorer } from "@/features/folders/hooks";
import LoadingSpinner from "@/components/loader/LoadingSpinner";
import { BaseBreadcrumbs } from "@/components/base/BaseBreadcrumbs";
import { FolderFileButton } from "@/components/buttons/FolderFileButton";
import { EmptyData } from "@/components/empty-data/EmptyData";
import { CreateFileButton } from "@/components/buttons/CreateFileButton";

export default function FolderPage() {
  const { folderId } = useParams();
  const { data: folder, isLoading: isLoadingFolder } = useGetFolderExplorer(folderId as string);

  const parentId = folderId?.[0] as string;

  const folderAndFiles  = useMemo(() => {
    const folders = folder?.folders || [];
    const files = folder?.files || [];

    const mappedFolders = folders.map((folder) => ({
      ...folder,
      type: "folder",
    }));

    const mappedFiles = files.map((file) => ({
      ...file,
      type: "file",
    }));

    return [...mappedFolders, ...mappedFiles];
  }, [folder]);

  const breadcrumbs = useMemo(() => {
    return folder?.breadcrumbs.map((breadcrumb) => ({
      label: breadcrumb.name,
      href: `/folders/${breadcrumb._id}`,
    }));
  }, [folder]);

  return (
    <div>
      <div className="flex w-full justify-between items-center h-10">
        <BaseBreadcrumbs breadcrumbs={breadcrumbs} />
        <div className="flex gap-2">
          <CreateFileButton parentId={parentId} />
          <CreateFolderButton parentId={parentId} />
        </div>
      </div>
      <section className="mt-6 relative">
        {isLoadingFolder && (
          <div className="flex min-h-96 absolute inset-0 justify-center items-center supports-backdrop-filter:backdrop-blur-xs">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {!isLoadingFolder && folder && folderAndFiles.length < 1 && (
          <EmptyData title="No folders or files found" description="You don't have any folders or files in this folder.">
          </EmptyData>
        )}

        {!isLoadingFolder && folder && folderAndFiles.length > 0 && (
          <div className="flex justify-start flex-wrap gap-4">
            {folderAndFiles.map((item) => (
              <FolderFileButton key={item._id} item={item as any} />
            ))}
          </div>
        )} 
      </section>
    </div>
  );
}