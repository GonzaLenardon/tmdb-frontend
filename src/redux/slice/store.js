import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import actorSlice from "./actorSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
    actor: actorSlice,
  },
});
