import { useNavigate } from "react-router";

export const MovieCard = ({ movie }) => {
  const navigator = useNavigate("/movie");

  const handleMovie = (id) => {
    navigator(`/movie/${id}`);
    console.log("movie", id);
  };
  return (
    <div className="card bg-success">
      <img
        src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path}
        className="card-img-top"
        alt="imgaen"
        onClick={() => handleMovie(movie.id)}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>

        <div className="position-fixed top-0 end-0 m-2">
          <button type="button" className="btn btn-warning">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
