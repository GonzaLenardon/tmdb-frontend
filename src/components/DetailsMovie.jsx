import { useParams } from "react-router";
import { useEffect } from "react";
import "../css/style.css";
import { useSelector, useDispatch } from "react-redux";
import { MovieId, Actors } from "../redux/thunks/movieThunks";

export const DetailsMovie = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state.movie.movie);
  const gen = movie.genres || [];
  const dispatch = useDispatch();
  const genero = [];

  useEffect(() => {
    dispatch(MovieId(id));
    dispatch(Actors(id));

    //https://api.themoviedb.org/3/movie/{movie_id}/credits
    //?api_key=a41ce438a072ada11ff592899af27e5b/

    console.log("migen", movie);
  }, []);

  return (
    <>
      <div className="container-xl mt-5 text-body">
        <div className="row pt-5 align-items-center  ">
          <div className="col-sm-4">
            <img
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              className="rounded mx-auto d-block "
              alt="imagen"
            />
          </div>

          <div className="col-sm-8 border border-5 ">
            <div className="row display-3 fw-bolder text-info border">
              {movie.original_title}
            </div>

            <div className="row fs-2 fw-bolder">
              {
                `${movie.release_date}`.slice(0, 4)
                /* ${movie.release_date}`.split("-").reverse().join("-") */
              }
            </div>

            <div className="row fs-2 fw-bolder">
              {gen.map((gene) => {
                genero.push(gene.name);
              })}

              {`${genero}`.split(",").join("  /  ")}
            </div>

            <div className="row fs-5 fw-bolder">
              <label className="row fs-2">Overview</label>
              {movie.overview}
            </div>
          </div>
        </div>
      </div>

      {/*        <img
          className="bgimage"
          src={`https://image.tmdb.org/t/p/w400/` + movie.poster_path}
          alt={movie.id}
        />
  */}
    </>
  );
};
