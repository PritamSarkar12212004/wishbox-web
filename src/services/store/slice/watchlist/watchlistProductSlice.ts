import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullWatchListData: [],
  idWatchListData: [] as string[],
};
const watchlistProductSlice = createSlice({
  name: "watchlistProductSlice",
  initialState,
  reducers: {
    initSetIdWatchListData: (state, action) => {
      state.idWatchListData = action.payload;
    },
    toggleWatchlist: (state, action) => {
      const productId = action.payload;
      if (state.idWatchListData.includes(productId)) {
        state.idWatchListData = state.idWatchListData.filter(
          (id) => id !== productId,
        );
      } else {
        state.idWatchListData.push(productId);
      }
    },
  },
});

export const { initSetIdWatchListData, toggleWatchlist } =
  watchlistProductSlice.actions;

export default watchlistProductSlice.reducer;
