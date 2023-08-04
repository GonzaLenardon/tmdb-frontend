import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actors: [],
};

const actorSlice = createSlice({
  name: "actors",
  initialState,
  reducers: {
    getActor: (state, action) => {
      state.actors = action.payload?.cast || [];
    },
  },
});

export const { getActor } = actorSlice.actions;
export default actorSlice.reducer;
