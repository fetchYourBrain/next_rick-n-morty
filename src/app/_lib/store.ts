import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter/filterSlice";
import favoriteSlice from "./favorites/favoriteSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
    favorites: favoriteSlice,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
