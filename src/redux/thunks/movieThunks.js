import {
  getPopular,
  getRated,
  getMovie,
  getUpcomming,
} from "../slice/movieSlice";
import { getActor } from "../slice/actorSlice";

/* export const popularMovie = () => async (dispatch) => {
  try {
    let peticion = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a41ce438a072ada11ff592899af27e5b"
    );
    let resp = await peticion.json();
    dispatch(getPopular(resp.results));
  } catch (error) {
    console.log(error);
  }
}; */

export const popularMovie = (page) => async (dispatch) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_TOKEN,
      },
    };

    let peticion = await fetch(
        `https://api.themoviedb.org/3/movie/popular?page=${page}`,
        options
      ),
      resp = await peticion.json();
    dispatch(getPopular(resp.results));
  } catch (err) {
    console.error(err);
  }
};

export const ratedMovie = (page) => async (dispatch) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_TOKEN,
      },
    };

    const peticion = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?page=${page}`,
      options
    );
    const resp = await peticion.json();
    dispatch(getRated(resp.results));
  } catch (err) {
    console.error(err);
  }
};

export const Upcomming = (page) => async (dispatch) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_TOKEN,
      },
    };

    const peticion = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?page=${page}`,
      options
    );
    const resp = await peticion.json();
    dispatch(getUpcomming(resp.results));
  } catch (err) {
    console.error(err);
  }
};

export const MovieId = (id) => async (dispatch) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDFjZTQzOGEwNzJhZGExMWZmNTkyODk5YWYyN2U1YiIsInN1YiI6IjY0NTQyMTNlYzA0NDI5MDE4NTcxZWY2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.24myZbli-YVUUBWijwkbZ0MS3l3fjW7azMcNEuLMpHY",
    },
  };

  fetch(`https://api.themoviedb.org/3/movie/${id}?language=es`, options)
    .then((response) => response.json())
    .then((response) => {
      dispatch(getMovie(response));
    })
    .catch((err) => console.error(err));
};

export const Actors = (idMovie) => async (dispatch) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_TOKEN,
    },
  };

  fetch(`https://api.themoviedb.org/3/movie/${idMovie}/credits`, options)
    .then((response) => response.json())
    .then((response) => {
      dispatch(getActor(response));
    })
    .catch((err) => console.error(err));
};

export const searchMovie = async (movie) => {
  console.log("esto es lo que llega", movie);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_TOKEN,
    },
  };
  const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
  /*Esta es una manera de realizar la peticion fetch */
  return fetch(url, options)
    .then((response) => response.json())
    .then((resp) => resp)
    .catch((error) => error);

  /* y esta es la otra manera con await fetch 
  
  const peticion = await fetch(url, options);
  const respuesta = await peticion.json();
  return respuesta; */
};
