import { getFavorites } from "../slice/movieSlice";

export const addFavorites = async (id, user) => {
  console.log("dddddddddd", id, "user", user);
  try {
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      credentials: "include",
      body: JSON.stringify({
        email: user,
      }),
    };

    await fetch(`http://localhost:3000/favorites/${id}`, options);
  } catch (error) {
    console.log(error);
  }
};

export const allFavorites = async (user) => {
  console.log("user email", user);
  try {
    const peticion = await fetch(`http://localhost:3000/favorites/all/${user}`);
    const respuesta = await peticion.json();
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const delFavorites = async (id, user) => {
  console.log("dddddddddd", id, "user", user);
  try {
    const options = {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      credentials: "include",
      body: JSON.stringify({
        email: user,
      }),
    };

    await fetch(`http://localhost:3000/favorites/${id}`, options);
  } catch (error) {
    console.log(error);
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
