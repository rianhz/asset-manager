import { File } from "../files/files.model";
import { CreateFolderPayload, CreateRootFolderPayload, GetFolderExplorerPayload, IFolder, ShareFolderPayload } from "./folders.interfaces";
import { Folder } from "./folders.model";


export const createRootFolder = async ({
  userId,
  name,
}: CreateRootFolderPayload): Promise<IFolder> => {
  const folder = await Folder.create({
    name,
    ownerId: userId,
    parentId: "",
    ancestors: [],
    depth: 0,
  });

  folder.rootId = folder._id;

  await folder.save();

  return folder;
};

export const createFolder = async ({
  parentId,
  name,
}: CreateFolderPayload) => {
  const parent = await Folder.findById(parentId);

  if (!parent) {
    throw new Error("Parent folder not found");
  }

  const folder = await Folder.create({
    name,

    parentId: parent._id,

    rootId: parent.rootId,

    ownerId: parent.ownerId,

    ancestors: [
      ...parent.ancestors,
      {
        _id: parent._id,
        name: parent.name,
      },
    ],

    depth: parent.depth + 1,
  });

  return folder;
};

export const shareFolder = async ({
  folderId,
  userId,
}: ShareFolderPayload) => {
  const folder = await Folder.findById(folderId);

  if (!folder) {
    throw new Error("Folder not found");
  }

  if (
    folder.ownerId.toString() !== userId.toString()
  ) {
    throw new Error("No permission");
  }

  folder.isRootShared = true;

  folder.shareToken = crypto.randomUUID();

  await folder.save();

  return {
    shareToken: folder.shareToken,
  };
};

export const getFolderExplorer = async ({
  folderId,
}: GetFolderExplorerPayload) => {
  const folder = await Folder.findById(folderId);

  if (!folder) {
    throw new Error("Folder not found");
  }

  const folders = await Folder.find({
    parentId: folder._id,
    isDeleted: false,
  }).sort({ name: 1 });

  const files = await File.find({
    folderId: folder._id,
    isDeleted: false,
  }).sort({ name: 1 });

  const breadcrumbs = [
    ...folder.ancestors,
    {
      _id: folder._id,
      name: folder.name,
    },
  ];

  return {
    folder,
    folders,
    files,
    breadcrumbs,
  };
};