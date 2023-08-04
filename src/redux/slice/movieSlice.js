import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: [],
  rated: [],
  upcomming: [],
  movie: [],
  pagination: {
    pagePopular: 1,
    pageRate: 1,
    pageUpcom: 1,
  },
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

    getPagePopular: (state, action) => {
      state.pagination.pagePopular = action.payload;
    },
    getPageRate: (state, action) => {
      state.pagination.pageRate = action.payload;
    },
    getPageUpCom: (state, action) => {
      state.pagination.pageUpcom = action.payload;
    },
  },
});

export const {
  getPopular,
  getRated,
  getUpcomming,
  getMovie,
  getPagePopular,
  getPageRate,
  getPageUpCom,
} = movieSlice.actions;
export default movieSlice.reducer;
