import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter/filterSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
