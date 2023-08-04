import { PopularMovie } from "../components/PopularMovie";
import { RateMovie } from "../components/RateMovie";
import { UpComMovie } from "../components/UpComMovie";
import { useDispatch } from "react-redux";
import { getMovie } from "../redux/slice/movieSlice";
import { getActor } from "../redux/slice/actorSlice";

export const HomePage = () => {
  const dispatch = useDispatch();

  dispatch(getMovie([]));
  dispatch(getActor([]));

  return (
    <>
      <RateMovie />
      <PopularMovie />
      <UpComMovie />
    </>
  );
};
