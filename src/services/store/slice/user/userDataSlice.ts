import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tempUserID: null,
  mainUserID: null,
};
const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userTempDataSet: (state, action) => {
      state.tempUserID = action.payload;
    },
    userMainpDataSet: (state, action) => {
      state.mainUserID = action.payload;
    },
    clearUserTempData: (state) => {
      state.tempUserID = null;
    },
  },
});

export const { userTempDataSet, clearUserTempData, userMainpDataSet } =
  userDataSlice.actions;

export default userDataSlice.reducer;
