import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainLoader: true,
};
const loadingSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    mainLoaderTogel: (state, action) => {
      state.mainLoader = action.payload;
    },
  },
});

export const { mainLoaderTogel } = loadingSlice.actions;

export default loadingSlice.reducer;
