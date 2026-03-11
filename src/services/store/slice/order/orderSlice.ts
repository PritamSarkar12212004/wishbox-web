import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderFullData: [],
};
const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    orderFullData: (state, action) => {
      state.orderFullData = action.payload;
    },
    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;

      const order = state.orderFullData.find((o) => o._id === orderId);

      if (order) {
        order.orderStatus = status;
      }
    },
  },
});

export const { orderFullData, updateOrderStatus } = orderSlice.actions;

export default orderSlice.reducer;
