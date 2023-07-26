import { useSelector } from "react-redux";
import { ActorCard } from "../common/ActorCard";

export const ActorsMovie = () => {
  const actors = useSelector((state) => state.actor.actors);
  const actor = actors.filter((actor, i) => i < 6);

  return (
    <>
      <div className="container-sm px-5 ">
        <div className="row justify-content-between">
          {actor.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div>
      </div>
    </>
  );
};
