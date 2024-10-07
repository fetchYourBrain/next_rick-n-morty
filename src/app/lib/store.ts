import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter/filterSlice";
import characterSlice from "./character/characterSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
    character: characterSlice,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
