import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites, removeFavorites } from "../redux/thunks/favoritesThunks";
import {
  setMsgFavorite,
  setResetFavorites,
  setFavorites,
} from "../redux/slice/movieSlice";

export const MovieCard = ({ movie, favorite }) => {
  const email = useSelector((state) => state.user.email);

  // const favorites = useSelector((state) => state.movie.favorites);

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const resetFavorites = useSelector((state) => state.movie.resetFavorites);

  const handleMovie = (id) => {
    navigator(`/movie/${id}`);

    console.log("movie", id);
  };

  const handleAction = (idMovie, action, tipo) => {
    action(idMovie, email).then((response) => {
      dispatch(setMsgFavorite(response));
    });

    setTimeout(() => {
      dispatch(setMsgFavorite(""));
      if (tipo == "del") {
        dispatch(setFavorites([]));

        dispatch(setResetFavorites(!resetFavorites));
      }
    }, 4000);
  };

  return (
    <>
      <div className="card position-relative">
        <img
          src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path}
          className="card-img-top"
          alt="imgaen"
          onClick={() => handleMovie(movie.id)}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          {email ? (
            <div className="position-absolute top-0 end-0 m-2">
              {favorite ? (
                <button
                  type="button"
                  className="btn btn-danger  rounded-circle"
                  onClick={() => handleAction(movie.id, removeFavorites, "del")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-warning rounded-circle"
                  onClick={() => handleAction(movie.id, addFavorites, "add")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" />
                  </svg>
                </button>
              )}
            </div>
          ) : (
            ""
          )}{" "}
        </div>
      </div>
    </>
  );
};
