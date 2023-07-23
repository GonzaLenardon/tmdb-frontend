import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: [],
  rated: [],
  upcomming: [],
  movie: [],
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
    getUpcomming: (state, action) => {
      state.upcomming = action.payload;
    },

    getMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { getPopular, getRated, getUpcomming, getMovie } =
  movieSlice.actions;
export default movieSlice.reducer;
