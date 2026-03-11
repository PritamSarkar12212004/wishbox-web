import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import key from "../../consts/secure/key";

import authReducer from "./slice/auth/authSlice";
import loadingSlice from "./slice/loading/loadingSlice";
import CollectionSlice from "./slice/collections/CollectionSlice";
import productSlice from "./slice/product/productSlice";
import gallerySlice from "./slice/Gallery/gallerySlice";
import tempProductSlice from "./slice/product/tempProductSlice";
import userDataSlice from "./slice/user/userDataSlice";
import cartDataSlice from "./slice/cart/cartDataSlice";
import watchListProductSlice from "./slice/watchlist/watchlistProductSlice";
import watchListMainProductSlice from "./slice/watchlist/watchListMainProductSlice";
import paymentInfoSlice from "./slice/paymentInfo/paymentInfoSlice";
import orderSlice from './slice/order/orderSlice'
const rootReducer: any = combineReducers({
  auth: authReducer,
  loader: loadingSlice,
  collection: CollectionSlice,
  product: productSlice,
  gallery: gallerySlice,
  productTempData: tempProductSlice,
  userDataSlice: userDataSlice,
  cartDataSlice: cartDataSlice,
  watchlistSlice: watchListProductSlice,
  watchlistMainSlice: watchListMainProductSlice,
  paymentInfoSlice: paymentInfoSlice,
  orderSlice: orderSlice,
});

const persistConfig = {
  key: key.REDUX_KEY.STORE_KEY,
  storage,
  whitelist: ["productTempData", "auth", "cartDataSlice", "watchlistSlice"],
  transforms: [
    encryptTransform({
      secretKey: key.REDUX_KEY.REDUX_ENCRYPTION_KEY,
      onError: function (error) {
        console.log("Encryption Error:", error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
