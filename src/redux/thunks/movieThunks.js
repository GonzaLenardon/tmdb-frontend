import { getPopular, getRated } from "../slice/movieSlice";

export const popularMovie = () => async (dispatch) => {
  try {
    let peticion = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a41ce438a072ada11ff592899af27e5b"
    );
    let resp = await peticion.json();
    dispatch(getPopular(resp.results));
  } catch (error) {
    console.log(error);
  }
};

export const ratedMovie = () => async (dispatch) => {
  try {
    let peticion = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=a41ce438a072ada11ff592899af27e5b"
    );
    let resp = await peticion.json();
    dispatch(getRated(resp.results));
  } catch (error) {
    console.log(error);
  }
};
