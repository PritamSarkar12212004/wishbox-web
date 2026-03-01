import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collection: [],
};
const CollectionSlice = createSlice({
  name: "collectionslice",
  initialState,
  reducers: {
    CollectionSet: (state, action) => {
      state.collection = action.payload;
    },
    ClearCollection: (state) => {
      state.collection = [];
    },
  },
});

export const { CollectionSet, ClearCollection } = CollectionSlice.actions;

export default CollectionSlice.reducer;
