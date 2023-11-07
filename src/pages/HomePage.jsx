import { PopularMovie } from "../components/PopularMovie";
import { RateMovie } from "../components/RateMovie";
import { UpComMovie } from "../components/UpComMovie";
import { useSelector, useDispatch } from "react-redux";
import { getMovie, setFavorites } from "../redux/slice/movieSlice";
import { getActor } from "../redux/slice/actorSlice";
import { ToastFavorite } from "../common/ToastFavorite";

export const HomePage = () => {
  const msgFavorite = useSelector((state) => state.movie.MsjFavorite);

  const dispatch = useDispatch();

  dispatch(getMovie([]));
  dispatch(setFavorites());
  dispatch(getActor([]));

  return (
    <>
      {msgFavorite ? <ToastFavorite /> : ""}

      <RateMovie />
      <PopularMovie />
      <UpComMovie />
    </>
  );
};
