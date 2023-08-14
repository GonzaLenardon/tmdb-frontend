import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import actorSlice from "./actorSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
    actor: actorSlice,
    user: userSlice,
  },
});
