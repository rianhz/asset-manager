import mongoose, { Schema } from "mongoose";

const fileSchema = new Schema(
  {
    folderId: {
      type: Schema.Types.ObjectId,
      ref: "Folder",
      required: true,
    },

    rootId: {
      type: Schema.Types.ObjectId,
      ref: "Folder",
      required: true,
    },

    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    originalName: {
      type: String,
      required: true,
      trim: true,
    },

    mimeType: {
      type: String,
      required: true,
    },

    size: {
      type: Number,
      required: true,
    },

    uploadthingKey: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

fileSchema.index({ folderId: 1 });

fileSchema.index({ rootId: 1 });

fileSchema.index({ ownerId: 1 });

export const File = mongoose.model("File", fileSchema);