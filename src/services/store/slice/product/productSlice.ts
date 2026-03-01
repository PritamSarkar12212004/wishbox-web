import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};
const productSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    ProductSet: (state, action) => {
      state.product = action.payload;
    },
    ClearProduct: (state) => {
      state.product = [];
    },
  },
});

export const { ProductSet,ClearProduct } = productSlice.actions;

export default productSlice.reducer;
