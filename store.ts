import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/auth/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import orgSlice from "./features/auth/orgSlice";
import idSlice from "./features/auth/idSlice";
import charitySlice from "./features/charity/charitySlice";

export const store = configureStore({
  reducer: {
    userSlice,
    orgSlice,
    idSlice,
    charitySlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
