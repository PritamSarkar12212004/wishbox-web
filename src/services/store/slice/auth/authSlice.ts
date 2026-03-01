import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  PhoneNumber: null,
  OneTimePasssword: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    SetPhoneNumber: (state, action) => {
      state.PhoneNumber = action.payload;
    },
    SetOneTimePasssword: (state, action) => {
      state.OneTimePasssword = action.payload;
    },
  },
});

// Actions export
export const { login, logout, SetPhoneNumber, SetOneTimePasssword } =
  authSlice.actions;

export default authSlice.reducer;
