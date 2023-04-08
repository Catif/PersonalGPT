import { combineReducers } from "@reduxjs/toolkit";

// slice
import { presets } from "./presets";

const rootReducer = combineReducers({
  presets: presets.reducer,
});

export default rootReducer;
