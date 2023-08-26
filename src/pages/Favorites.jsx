import { useEffect, useState } from "react";
import { allFavorites, detailFavorites } from "../redux/thunks/favoritesThunks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Favorites = () => {
  const user = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("primero x aca");
    allFavorites(user)
      .then((idsMoviesFavorites) => {
        setMovies(idsMoviesFavorites);

        console.log("Espero a que termine", movies);
      })

      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("lasMOvies", movies);

    movies.map((el, i) => {
      dispatch(detailFavorites(movies[i].Movie));
    });
  }, [movies]);

  return (
    <ul>
      {movies.map((m) => {
        return <li key={m.id}>{m.Movie}</li>;
      })}
    </ul>
  );
};
