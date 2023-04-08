import { configureStore } from "@reduxjs/toolkit";
import { presets } from "./slice/presets";

export const store = configureStore({
  reducer: {
    presets: presets.reducer,
  },
});
