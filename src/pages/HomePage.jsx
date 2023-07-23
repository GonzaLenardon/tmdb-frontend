import { PopularMovie } from "../components/PopularMovie";
import { RateMovie } from "../components/RateMovie";
import { UpCommingMovie } from "../components/UpCommingMovie";

export const HomePage = () => {
  return (
    <>
      <RateMovie />
      <PopularMovie />
      <UpCommingMovie />
    </>
  );
};
