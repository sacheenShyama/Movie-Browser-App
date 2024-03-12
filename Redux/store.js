import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
