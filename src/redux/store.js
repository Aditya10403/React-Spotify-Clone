// import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { shazamCoreApi } from "./services/shazamCore";
import playerReducer from "./features/playerSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
