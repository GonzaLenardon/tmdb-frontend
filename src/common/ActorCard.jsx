export const ActorCard = ({ actor }) => {
  return (
    <div className="col-6 col-sm-2 my-3 text-center">
      <p>{actor.name} </p>
      <img
        src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
        className="rounded-4 img-fluid"
        alt={actor.id}
      />
      <p>{actor.character}</p>
    </div>
  );
};
