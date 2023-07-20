import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: [],
  rated: [],
  upcomming: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getPopular: (state, action) => {
      state.popular = action.payload;
    },

    getRated: (state, action) => {
      state.rated = action.payload;
    },
  },
});

export const { getPopular, getRated } = movieSlice.actions;
export default movieSlice.reducer;
