import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { addFavorites } from "../redux/thunks/favoritesThunks";

export const MovieCard = ({ movie }) => {
  const email = useSelector((state) => state.user.email);
  const navigator = useNavigate();

  const handleMovie = (id) => {
    navigator(`/movie/${id}`);
    console.log("movie", id);
  };

  const handleFavorite = (idMovie) => {
    addFavorites(idMovie, email);
  };

  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path}
        className="card-img-top"
        alt="imgaen"
        onClick={() => handleMovie(movie.id)}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>

        {email ? (
          <div className="position-fixed top-0 end-0 m-2">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => handleFavorite(movie.id)}
            >
              Add
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
