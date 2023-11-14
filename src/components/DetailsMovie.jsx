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
  const country = movie.production_countries?.[0] || [];
  const vote_average = Math.round(movie.vote_average * 10) || "";
  const background = movie.poster_path;

  useEffect(() => {
    dispatch(MovieId(id));
    dispatch(Actors(id));
  }, []);

  return (
    <>
      <div className="container-fluid text-body d-flex justify-content-center mb-5 position-relative">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w400/${background})`,
          }}
        />

        <div className="container-sm my-5" id="detailMovie">
          <div className="row d-flex justify-content-center">
            <div className="position-relative col-12 col-md-6 col-lg-4 p-1 mb-5 d-flex align-items-strech    justify-content-center">
              <img
                src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                className="rounded img-fluid posterMovie "
                alt="imagen"
              />
              <button className="btn-popularidad-movie bg-warning fs-5">
                {vote_average}%<div className="msg-popo">popularity</div>
              </button>
            </div>

            <div className="col col-md-6 col-lg-6 px-md-5 flex-column d-flex justify-content-around mb-5">
              <div className="col-12 fw-bolder text-warning titleMovie">
                <p>{movie?.original_title || "title"}</p>
              </div>

              <p className="col-12 fw-bolder subtitle">
                {
                  `${movie?.release_date || "year"}`.slice(0, 4)
                  /* ${movie.release_date}`.split("-").reverse().join("-") */
                }
                {" / "}
                {country?.name || "contry"}
              </p>

              {gen.map((gene) => {
                genero.push(gene.name);
              })}

              <p className="col-12 fw-bolder subtitle">
                {`${genero}`.split(",").join("  /  ")}
              </p>
              <p className="col-12 fw-bolder subtitle">
                {Math.floor(movie?.runtime / 60) || "H"}h{":"}
                {Math.floor(movie?.runtime % 60) || "M"}m
              </p>
              <p className="col-12 fw-bolder subtitle">Overview</p>

              <p className="col-12 fw-normal fs-5 text-white">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
