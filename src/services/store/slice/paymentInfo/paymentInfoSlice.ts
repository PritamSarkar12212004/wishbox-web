import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentInfoData: [],
};
const paymentInfoSlice = createSlice({
  name: "paymentInfoSlice",
  initialState,
  reducers: {
    paymentInfoData: (state, action) => {
      state.paymentInfoData = action.payload;
    },
  },
});

export const { paymentInfoData } = paymentInfoSlice.actions;

export default paymentInfoSlice.reducer;
