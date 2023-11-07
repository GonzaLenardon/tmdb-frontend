import { Link } from "react-router-dom";
import { ButtonUser } from "./ButtonUser";
import { useSelector } from "react-redux";
import useInput from "../hooks/UseInput";
import { searchMovie } from "../redux/thunks/movieThunks";
import { setSearch } from "../redux/slice/movieSlice";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const logged = useSelector((state) => state.user.name);
  const inputsearch = useInput();
  const dispatch = useDispatch();

  const search = () => {
    searchMovie(inputsearch.value).then((resp) =>
      dispatch(setSearch(resp.results))
    );
    inputsearch.onReset();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top position-relative ">
      <div className="container-fluid" id="up">
        <div className="navbar-brand col-8 col-md-4 col-xl-2">
          <Link to={"/"}>
            <img
              className="img-fluid"
              src="/public/logo.svg"
              alt="Bootstrap"
              width="100%"
              height="auto"
            />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse col-7 col-md-8 col-xl-10"
          id="navbarSupportedContent"
        >
          <div className="d-flex my-3 ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search to movie"
              aria-label="Search"
              {...inputsearch}
            />

            <Link to={"/movie/search"}>
              <button
                className="btn btn-outline-warning"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={search}
              >
                Search
              </button>
            </Link>
          </div>

          <ul className="navbar-nav ms-auto  ">
            {!logged ? (
              <>
                <li className="nav-item d-sm-none mt-3">
                  <Link to={"/signup"}>
                    <button
                      className="btn btn-warning col-12 "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-expanded="false"
                      aria-controls="navbarSupportedContent"
                    >
                      SignUp
                    </button>
                  </Link>
                </li>

                <li className=" nav-item my-3 my-md-0 ms-2">
                  <Link to={"/signup"} style={{ textDecoration: "none" }}>
                    <button
                      className="btn btn-warning col-12 d-none d-sm-block   "
                      type="button"
                    >
                      SignUp
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}

            <ButtonUser />
          </ul>
        </div>
      </div>
    </nav>
  );
};
