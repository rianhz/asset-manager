import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ReactNode } from "react";

interface DialogPayload {
  title?: string;

  description?: string;

  content?: ReactNode;

  onConfirm?: () => void;
}

interface DialogState {
  open: boolean;

  title?: string;

  description?: string;

  content?: ReactNode;

  onConfirm?: () => void;
}

const initialState: DialogState = {
  open: false,

  title: "",

  description: "",

  content: null,

  onConfirm: undefined,
};

const dialogSlice = createSlice({
  name: "dialog",

  initialState,

  reducers: {
    openDialog: (
      state,
      action: PayloadAction<DialogPayload>
    ) => {
      state.open = true;

      state.title = action.payload.title;

      state.description =
        action.payload.description;

      state.content = action.payload.content;

      state.onConfirm =
        action.payload.onConfirm;
    },

    closeDialog: (state) => {
      state.open = false;

      state.title = "";

      state.description = "";

      state.content = null;

      state.onConfirm = undefined;
    },
  },
});

export const {
  openDialog,
  closeDialog,
} = dialogSlice.actions;

export default dialogSlice.reducer;