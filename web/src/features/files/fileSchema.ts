import { z } from "zod";

export const uploadFileSchema = z.object({
  name: z.string().min(1, "File name is required").max(60, "File name must be less than 20 characters"),
  originalName: z.string().min(1, "Original file name is required").max(60, "Original file name must be less than 20 characters"),
  mimeType: z.string().min(1, "Mime type is required"),
  size: z.number().min(1, "File size is required"),
  uploadthingKey: z.string().min(1, "Uploadthing key is required"),
  url: z.string().min(1, "File URL is required"),
});

export type UploadFileFormValues = z.infer<typeof uploadFileSchema>;