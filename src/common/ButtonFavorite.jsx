import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { addFavorites } from "../redux/thunks/favoritesThunks";

export const ButtonFavorite = ({ movie }) => {
  const email = useSelector((state) => state.user.email);
  const navigator = useNavigate();

  const handleFavorite = (idMovie) => {
    addFavorites(idMovie, email);
  };

  getFavorites();

  return (
    <>
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
    </>
  );
};
