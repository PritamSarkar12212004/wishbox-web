import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productShowData: null,
};
const tempProductSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    tempProductShowData: (state, action) => {
      state.productShowData = action.payload;
    },
    clearTemProductShowData: (state) => {
      state.productShowData = null;
    },
  },
});

export const { tempProductShowData, clearTemProductShowData } =
  tempProductSlice.actions;

export default tempProductSlice.reducer;
