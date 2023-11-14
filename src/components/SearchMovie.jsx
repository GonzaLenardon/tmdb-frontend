import { useEffect } from "react";
import { useSelector } from "react-redux";
import { MovieCard } from "../common/MovieCard";
import { ToastFavorite } from "../common/ToastFavorite";

const SearchMovie = () => {
  const msgFavorite = useSelector((state) => state.movie.MsjFavorite);
  const search = useSelector((state) => state.movie.search);
  console.log(search);

  return (
    <>
      {msgFavorite ? <ToastFavorite /> : ""}
      <div className="min-vh-100">
        <p className="fw-bolder text-warning text-center mt-3 clasificacionMovie">
          Search
        </p>

        <div className="container ">
          <div className="row">
            {search.map((movie) => (
              <div
                className="col-6 col-sm-4 col-lg-2 p-2 position-relative"
                key={movie.id}
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchMovie;
