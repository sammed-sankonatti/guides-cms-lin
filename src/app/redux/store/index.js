import { configureStore } from "@reduxjs/toolkit";
import globalsearchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    globalsearch: globalsearchReducer,
  },
});
