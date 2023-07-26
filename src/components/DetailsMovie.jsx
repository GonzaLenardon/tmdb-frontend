import { useParams } from "react-router";
import { useEffect } from "react";
import "../css/style.css";
import { useSelector, useDispatch } from "react-redux";
import { Actors, MovieId } from "../redux/thunks/movieThunks";
import { ActorsMovie } from "./ActorsMovie";

export const DetailsMovie = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state.movie.movie);
  const gen = movie.genres || [];
  const dispatch = useDispatch();
  const genero = [];

  useEffect(() => {
    dispatch(MovieId(id));
    dispatch(Actors(id));

    console.log("migen", movie);
  }, []);

  return (
    <>
      <div className="container-xl my-5 text-body">
        <div className="row pt-5 align-items-center  ">
          <div className="col-sm-4">
            <img
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              className="rounded mx-auto d-block posterMovie"
              alt="imagen"
            />
          </div>

          <div className="col-sm-8 ">
            <div className="row display-2 fw-bolder titleMovie">
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
