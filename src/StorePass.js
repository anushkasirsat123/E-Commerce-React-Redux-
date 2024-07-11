import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/SlicePass";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
