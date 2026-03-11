import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};
const shipRocketSlice = createSlice({
  name: "shipRocketSlice",
  initialState,
  reducers: {
    setTokenShipRocket: (state, action) => {
      state.token = action.payload;
    },

    ClearProduct: (state) => {
      state.token = null;
    },
  },
});

export const { setTokenShipRocket, ClearProduct } = shipRocketSlice.actions;

export default shipRocketSlice.reducer;
