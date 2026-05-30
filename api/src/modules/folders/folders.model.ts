import { model, Schema } from "mongoose";

import { IFolder } from "./folders.interfaces";

const folderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    parentId: {
      type: Schema.Types.ObjectId,
      ref: "Folder",
      default: null,
    },

    rootId: {
      type: Schema.Types.ObjectId,
      ref: "Folder",
    },

    ancestors: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          ref: "Folder",
        },

        name: {
          type: String,
          required: true,
        },
      },
    ],

    depth: {
      type: Number,
      default: 0,
    },

    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    isRootShared: {
      type: Boolean,
      default: false,
    },

    shareToken: {
      type: String,
      default: null,
    },

    allowPublicUpload: {
      type: Boolean,
      default: true,
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

folderSchema.index({ parentId: 1 });

folderSchema.index({ rootId: 1 });

folderSchema.index({ ownerId: 1 });

folderSchema.index({ shareToken: 1 });

folderSchema.index({ "ancestors._id": 1 });

export const Folder = model<IFolder>(
  "Folder",
  folderSchema
);