import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlistMainData: [] as string[],
};
const watchListMainProductSlice = createSlice({
  name: "watchListMainProductSlice",
  initialState,
  reducers: {
    initalMainFullWatchList: (state, action) => {
      state.watchlistMainData = action.payload;
    },
    removeWatchListItem: (state, action) => {
      const id = action.payload;
      state.watchlistMainData = state.watchlistMainData.filter(
        (item: any) => item._id !== id,
      );
    },
  },
});

export const { initalMainFullWatchList, removeWatchListItem } =
  watchListMainProductSlice.actions;

export default watchListMainProductSlice.reducer;
