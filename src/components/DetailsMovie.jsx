import { useParams } from "react-router";
import { useEffect } from "react";
import "../css/style.css";
import { useSelector, useDispatch } from "react-redux";
import { Actors, MovieId } from "../redux/thunks/movieThunks";

export const DetailsMovie = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state.movie.movie);
  const gen = movie.genres || [];
  const dispatch = useDispatch();
  const genero = [];

  useEffect(() => {
    dispatch(MovieId(id));
    dispatch(Actors(id));
  }, []);

  return (
    <>
      {/* <div className="container-fluid text-body d-flex justify-content-center mb-5">*/}
      <div className="container-sm mt-5">
        {/* <div className="row w-75 pt-5"> */}
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-6 col-lg-4  mb-5">
            <img
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              className="rounded mx-auto img-fluid posterMovie"
              alt="imagen"
            />
          </div>

          <div className="col col-sm-6 col-lg-8 d-flex flex-column justify-content-center mb-5">
            <div className="col-12 display-2 fw-bolder titleMovie ">
              {movie.original_title}
            </div>

            <div className="col-12 fs-2 fw-bolder font-color">
              {
                `${movie.release_date}`.slice(0, 4)
                /* ${movie.release_date}`.split("-").reverse().join("-") */
              }
            </div>

            <div className="col-12 fs-2 fw-bolder font-color">
              {gen.map((gene) => {
                genero.push(gene.name);
              })}

              {`${genero}`.split(",").join("  /  ")}
            </div>

            <div className="col-12 fs-2 fw-bolder font-color">Overview</div>
            <div className="col-12  fs-5 mb-6 fw-bolder ">{movie.overview}</div>
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
