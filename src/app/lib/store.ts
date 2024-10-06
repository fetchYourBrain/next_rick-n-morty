import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter/filterSlice";

export const makeStore = () => {
    return configureStore({
      reducer: {
        filter: filterSlice,
      },
    })
  }
  export type AppStore = ReturnType<typeof makeStore>
  export type RootState = ReturnType<AppStore['getState']>
  export type AppDispatch = AppStore['dispatch']