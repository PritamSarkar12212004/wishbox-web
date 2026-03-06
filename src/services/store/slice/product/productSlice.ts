import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  productFullData: [],
};
const productSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    ProductSet: (state, action) => {
      state.product = action.payload;
    },
    ProductFullDataSet: (state, action) => {
      state.productFullData = action.payload;
    },
    ClearProduct: (state) => {
      state.product = [];
    },
  },
});

export const { ProductSet, ClearProduct, ProductFullDataSet } =
  productSlice.actions;

export default productSlice.reducer;
