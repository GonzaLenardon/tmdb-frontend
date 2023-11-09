import { getFavorites } from "../slice/movieSlice";

const urlback = import.meta.env.VITE_TOKEN;

export const addFavorites = async (id, user) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      credentials: "include",
      body: JSON.stringify({
        email: user,
      }),
    };

    const pet = await fetch(`${urlback}/favorites/${id}`, options);
    const response =
      pet.status == "201"
        ? { peticion: `success`, mensaje: "Add to Favorite" }
        : { peticion: `info`, mensaje: `The movie exists in my Favorites` };
    return response;
  } catch (error) {
    const response = { peticion: `warning`, mensaje: `An error has occurred` };
    return response;
  }
};

export const allFavorites = async (user) => {
  console.log("user email", user);
  try {
    const peticion = await fetch(`${urlback}/favorites/all/${user}`);

    const respuesta = await peticion.json();
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const removeFavorites = async (idMovie, user) => {
  try {
    const options = {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      credentials: "include",
      body: JSON.stringify({
        email: user,
      }),
    };

    const peticion = await fetch(
      `${urlback}/favorites/remove/${idMovie}`,
      options
    );
    const response =
      peticion.status == "201"
        ? { peticion: `success`, mensaje: "Movie removed from Favorite" }
        : {
            peticion: `warning`,
            mensaje: `Could not remove the movie from favorites`,
          };
    return response;
  } catch (error) {
    const response = { peticion: `warning`, mensaje: `An error has occurred` };
    return response;
  }
};

export const detailFavorites = (id) => async (dispatch) => {
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
      dispatch(getFavorites(response));
    })
    .catch((err) => console.error(err));
};
