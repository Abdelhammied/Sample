import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: 1,
  reducers: {
    updatePage: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

export const { updatePage } = pageSlice.actions;
