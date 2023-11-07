export const ActorCard = ({ actor }) => {
  return (
    <div className="col-6 col-md-2 my-3 text-center fs-5 ">
      <img
        src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
        className="rounded-4 img-fluid"
        alt={actor.id}
      />
      <p className="text-white fw-medium">{actor.name} </p>
      <p className="text-info">{actor.character}</p>
    </div>
  );
};
