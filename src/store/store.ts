import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/Cart.slice";
import adminReducer from "./slices/Admin.slice";

export const store = configureStore({
   reducer: {
      cart: productReducer,
      admin: adminReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
