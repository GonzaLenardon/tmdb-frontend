import { useSelector } from "react-redux";
import { ActorsMovie } from "../components/ActorsMovie";
import { DetailsMovie } from "../components/DetailsMovie";

export const MoviePage = () => {
  const userx = useSelector((state) => state.user.user);
  const numpage = useSelector((state) => state.movie.pagination.pageRate);

  return (
    <>
      <DetailsMovie />
      <h2>Este es el usuario {userx}</h2>
      <ActorsMovie />
    </>
  );
};
