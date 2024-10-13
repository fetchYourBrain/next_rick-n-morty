import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter/filterSlice";
import characterSlice from "./character/characterSlice";
import episodeSlice from "./episode/episodeSlice";
import locationSlice from "./location/locationSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
    character: characterSlice,
    episode: episodeSlice,
    location: locationSlice,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
