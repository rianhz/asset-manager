"use client";
import { EmptyData } from "@/components/empty-data/EmptyData";
import { useGetDeletedFoldersWithin30Days } from "@/features/folders/hooks";
import LoadingSpinner from "@/components/loader/LoadingSpinner";
import { FolderFileButton } from "@/components/buttons/FolderFileButton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";

export default function RecycleBinPage() {
    const { data: deletedFoldersWithin30Days, isLoading: isLoadingDeletedFoldersWithin30Days } = useGetDeletedFoldersWithin30Days();

    return (
        <>
            <div className="flex justify-between items-center">
                <Alert variant="destructive">
                    <AlertTriangleIcon className="size-8" />
                    <AlertTitle className="text-2xl font-bold">Recycle Bin</AlertTitle>
                    <AlertDescription>
                        All your deleted folders/files will appears here, you can restore or permanently delete them as needed.
                    </AlertDescription>
                </Alert>
            </div>
            {isLoadingDeletedFoldersWithin30Days && (
                <div className="flex min-h-96 absolute inset-0 justify-center items-center supports-backdrop-filter:backdrop-blur-xs">
                <LoadingSpinner size="lg" />
            </div>
            )}
            {deletedFoldersWithin30Days && deletedFoldersWithin30Days.length === 0 && <EmptyData title="No folders found in recycle bin" description="Folders deleted within the last 30 days will appear here. Restore or permanently delete them as needed." />}

            {deletedFoldersWithin30Days && deletedFoldersWithin30Days.length > 0 && (
                <div className="flex justify-start flex-wrap gap-4 mt-4">
                    {deletedFoldersWithin30Days.map((folder) => (
                        <FolderFileButton key={folder._id} itemId={folder._id} value={folder.name} enableRestore={true} enableDelete={false} enableRename={false} enablePermanentlyDelete={true}>
                            {folder.name}
                        </FolderFileButton>
                    ))}
                </div>
            )}
          

        </>
    );
}