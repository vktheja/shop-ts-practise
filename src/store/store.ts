import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice.ts";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // ReturnType to get acces to return value of store.getstate funtion
export type AppDispatch = typeof store.dispatch;
