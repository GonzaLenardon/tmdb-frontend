import { useEffect, useState } from "react";
import { allFavorites, detailFavorites } from "../redux/thunks/favoritesThunks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MovieCard } from "../common/MovieCard";

export const Favorites = () => {
  const user = useSelector((state) => state.user.email);
  const favorites = useSelector((state) => state.movie.favorites);

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
    <>
      <div className="">
        <p className="display-1 fw-bolder text-warning text-center mt-3">
          Favorites
        </p>
      </div>

      <div className="container mt-5">
        <div className="row">
          {favorites.map((movie) => (
            <div key={movie.id} className="col-6 col-sm-4 col-lg-2 p-2">
              <MovieCard key={movie.id} movie={movie} favorite={true} />;
            </div>
          ))}
        </div>
        ;
      </div>
    </>
  );
};
