import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth/authSlice";
import loadingSlice from "./slice/loading/loadingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loader: loadingSlice,
  },
});
