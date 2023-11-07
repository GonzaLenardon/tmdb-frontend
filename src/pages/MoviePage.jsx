import { useState } from "react";
import { ActorsMovie } from "../components/ActorsMovie";
import { DetailsMovie } from "../components/DetailsMovie";
import { setFavorites } from "../redux/slice/movieSlice";
import { useDispatch } from "react-redux";
import { Footer } from "../components/Footer";

export const MoviePage = () => {
  const dispatch = useDispatch();
  dispatch(setFavorites([]));

  const [spinner, setSpinner] = useState(true);

  setTimeout(() => {
    setSpinner(false);
  }, 1000);

  return (
    <>
      <DetailsMovie />
      {spinner ? (
        ""
      ) : (
        /*   <>
          <div className="d-flex justify-content-center ">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </> */

        <>
          {" "}
          <ActorsMovie />
        </>
      )}
    </>
  );
};
