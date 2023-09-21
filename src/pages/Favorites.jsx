import { useEffect } from "react";
import { allFavorites, detailFavorites } from "../redux/thunks/favoritesThunks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MovieCard } from "../common/MovieCard";
import { ToastFavorite } from "../common/ToastFavorite";

export const Favorites = () => {
  const user = useSelector((state) => state.user.email);
  const favorites = useSelector((state) => state.movie.favorites);
  const msgFavorite = useSelector((state) => state.movie.MsjFavorite);
  const resetFavorites = useSelector((state) => state.movie.resetFavorites);

  const dispatch = useDispatch();

  useEffect(() => {
    allFavorites(user)
      .then((idsMovFav) => {
        idsMovFav.map((el, i) => {
          dispatch(detailFavorites(idsMovFav[i].Movie));
        });
      })

      .catch((error) => console.log(error));
  }, [resetFavorites]);

  return (
    <>
      {msgFavorite ? <ToastFavorite /> : ""}

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
