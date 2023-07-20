import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "../css/style.css";

export const DetailsMovie = () => {
  const idMovie = useParams().id;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDFjZTQzOGEwNzJhZGExMWZmNTkyODk5YWYyN2U1YiIsInN1YiI6IjY0NTQyMTNlYzA0NDI5MDE4NTcxZWY2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.24myZbli-YVUUBWijwkbZ0MS3l3fjW7azMcNEuLMpHY",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${idMovie}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie(response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* <h1>DetailsMovie</h1>
      <h3>Pelicula nro. {idMovie}</h3>
      
      <div style={{ width: "auto", height: "600px" }} className="bg-primary"> 
        <img
          src={`https://image.tmdb.org/t/p/w400/` + movie.poster_path}
          className="d-block w-100"
          alt={movie.id}
        />  */}

      <div className="container mt-5">
        <div className="row pt-5 align-items-center ">
          <div className="col-sm-6 border boreder-5">
            <img
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              className="rounded float-start"
              alt="imagen"
            />
          </div>
          <div className="col-sm-6 border boreder-5">
            <p className="fs-3">{movie.overview}</p>
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
