"use client";

import { CreateFolderButton } from "@/components/buttons/CreateFolderButton";
import { Folder } from "lucide-react";
import Link from "next/link";
import { useGetUserRootFolders } from "@/features/folders/hooks";
import LoadingSpinner from "@/components/loader/LoadingSpinner";
import { FolderFileButton } from "@/components/buttons/FolderFileButton";
import { EmptyData } from "@/components/empty-data/EmptyData";
import { useGetAllUserFiles } from "@/features/files/hooks";
import { CreateFileButton } from "@/components/buttons/CreateFileButton";
import { useMemo } from "react";

export default function DashboardPage() {

  const { data: userFolders , isLoading: isLoadingUserFolders } = useGetUserRootFolders();
  const { data: userFiles , isLoading: isLoadingUserFiles } = useGetAllUserFiles();

 const isLoading = useMemo(() => {
  return isLoadingUserFolders || isLoadingUserFiles;
 }, [isLoadingUserFolders, isLoadingUserFiles]);

  const foldersAndFiles = useMemo(() => {
    const folders = userFolders?.map(f => ({ ...f, type: "folder" as const }));
    const files = userFiles?.map(f => ({ ...f, type: "file" as const }));
    return [...(folders || []), ...(files || [])];
  }, [userFolders, userFiles]);
  

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <div className="flex gap-2 align-items-center">
          <CreateFileButton />
          <CreateFolderButton />
        </div>
      </div>
      <section className="mt-6 relative">
        {isLoading && (
          <div className="flex min-h-96 absolute inset-0 justify-center items-center supports-backdrop-filter:backdrop-blur-xs">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {!isLoading && foldersAndFiles && foldersAndFiles.length < 1 && (
        <EmptyData title="No folders found" description="You haven't created any folders yet. Get started by creating your first folder.">
          <CreateFolderButton />
        </EmptyData>
        )}

        {!isLoading && foldersAndFiles && foldersAndFiles.length > 0 && (
          <div className="flex justify-start flex-wrap gap-4">
            {foldersAndFiles.map((item) => (
              <FolderFileButton key={item._id} item={item} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}