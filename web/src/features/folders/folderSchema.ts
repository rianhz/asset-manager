import { z } from "zod";

export const createFolderSchema = z.object({
  name: z.string().min(1, "Folder name is required").max(60, "Folder name must be less than 20 characters"),
});

export type CreateFolderFormValues = z.infer<typeof createFolderSchema>;

export const renameFormSchema = z.object({
  name: z.string().min(1, "Folder name is required").max(60, "Folder name must be less than 20 characters"),
});

export type RenameFormValues = z.infer<typeof renameFormSchema>;