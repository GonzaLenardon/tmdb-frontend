import { useSelector } from "react-redux";
import { ActorCard } from "../common/ActorCard";

export const ActorsMovie = () => {
  const actors = useSelector((state) => state.actor.actors);
  const actor = actors.filter((actor, i) => i < 6);

  return (
    <>
      <div className="container-sm px-md-5 ">
        <p className="display-4 fw-bolder cast">Cast</p>
        <div className="row justify-content-between">
          {actor.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div>
      </div>
    </>
  );
};
