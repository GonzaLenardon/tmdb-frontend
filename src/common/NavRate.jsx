import { useDispatch, useSelector } from "react-redux";
import { getPageRate } from "../redux/slice/movieSlice";

export const NavRate = () => {
  const numpage = useSelector((state) => state.movie.pagination.pageRate);
  const dispatch = useDispatch();

  const handlePagination = (operacion) => {
    if (operacion) {
      dispatch(getPageRate(numpage + 1));
    } else {
      dispatch(getPageRate(numpage - 1));
    }
  };

  return (
    <div className="container-sm col text-center">
      {numpage < 2 ? (
        <button
          type="button"
          className="btn btn-outline-info border-5"
          disabled
          onClick={() => handlePagination(false)}
        >
          Prev
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-outline-info border-5"
          onClick={() => handlePagination(false)}
        >
          Prev
        </button>
      )}

      <label className="mx-3 fs-5 text-white">Page {numpage}</label>

      <button
        type="button"
        className="btn btn-outline-info border-5"
        onClick={() => handlePagination(true)}
      >
        Next
      </button>
    </div>
  );
};
