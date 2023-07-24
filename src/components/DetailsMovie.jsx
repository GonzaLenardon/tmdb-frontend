import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "../css/style.css";
import { useSelector, useDispatch } from "react-redux";
import { MovieId } from "../redux/thunks/movieThunks";

export const DetailsMovie = () => {
  const { id } = useParams();
  const movie = useSelector((state) => state.movie.movie);
  const dispatch = useDispatch();
  //const [movie, setMovie] = useState([]);

  useEffect(() => {
    dispatch(MovieId(id));
    /* const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDFjZTQzOGEwNzJhZGExMWZmNTkyODk5YWYyN2U1YiIsInN1YiI6IjY0NTQyMTNlYzA0NDI5MDE4NTcxZWY2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.24myZbli-YVUUBWijwkbZ0MS3l3fjW7azMcNEuLMpHY",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.genres);
        setMovie(response);
      })
      .catch((err) => console.error(err)); */
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row pt-5 align-items-center  ">
          <div className="col-sm-4">
            <img
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              className="rounded mx-auto d-block"
              alt="imagen"
            />
          </div>

          <div className="col-sm-8">
            <p className="fs-2 text-info ps-3">{movie.overview}</p>
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
