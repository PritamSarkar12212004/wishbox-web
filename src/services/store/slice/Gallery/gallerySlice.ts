import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gallery: [],
};
const gallerySlice = createSlice({
  name: "gallerySlice",
  initialState,
  reducers: {
    GallerySet: (state, action) => {
      state.gallery = action.payload;
    },
  },
});

export const { GallerySet } = gallerySlice.actions;

export default gallerySlice.reducer;
