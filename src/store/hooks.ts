import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./store.ts";

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;

// or

// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "./store";

// // ✅ Define a proper custom hook
// export const useCartDispatch = () => useDispatch<AppDispatch>();
