import { ActorsMovie } from "../components/ActorsMovie";
import { DetailsMovie } from "../components/DetailsMovie";
import { setFavorites } from "../redux/slice/movieSlice";
import { useDispatch } from "react-redux";

export const MoviePage = () => {
  const dispatch = useDispatch();
  dispatch(setFavorites([]));

  return (
    <>
      <DetailsMovie />
      <ActorsMovie />
    </>
  );
};
