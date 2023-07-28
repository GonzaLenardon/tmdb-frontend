import { ActorsMovie } from "../components/ActorsMovie";
import { DetailsMovie } from "../components/DetailsMovie";

export const MoviePage = () => {
  console.log(import.meta.env.VITE_TOKEN);

  return (
    <>
      <DetailsMovie />
      <ActorsMovie />
    </>
  );
};
