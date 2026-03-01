import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  cartIDData: [],
};

const cartDataSlice = createSlice({
  name: "cartDataSlice",
  initialState,
  reducers: {
    cartDataSet: (state, action) => {
      state.cartData = action.payload;
    },
    cartDataPush: (state: any, action: any) => {
      state.cartData.push(action.payload);
    },
    cartIdDataSet: (state, action) => {
      state.cartIDData = action.payload;
    },
    cartIdDataPush: (state: any, action: any) => {
      state.cartIDData.push(action.payload);
    },
    clearCartIdData: (state) => {
      state.cartIDData = [];
    },
    clearCartData: (state) => {
      state.cartData = [];
    },
  },
});

export const {
  cartDataSet,
  cartDataPush,
  clearCartData,
  cartIdDataPush,
  cartIdDataSet,
  clearCartIdData,
} = cartDataSlice.actions;

export default cartDataSlice.reducer;
