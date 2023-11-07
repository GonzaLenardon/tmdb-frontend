import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slice/userSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { logout } from "../redux/thunks/userThunks";

export const ButtonUser = () => {
  const logged = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handlelogout = () => {
    logout();
    dispatch(setUser(""));
    navigator("/");
  };

  return (
    <li className="nav-item mb-3 my-md-0 mx-md-2 mx-lg-5 pe-lg-5">
      {!logged ? (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button
            className="btn btn-warning col-12 d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-expanded="false"
            aria-controls="navbarSupportedContent"
          >
            Login
          </button>

          <button
            className="btn btn-warning col-12 d-none d-md-block"
            type="button"
          >
            Login
          </button>
        </Link>
      ) : (
        <>
          <div className="dropdown d-none d-md-block">
            <button
              className="btn btn-warning dropdown-toggle col-12"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {logged}
            </button>

            <ul className="dropdown-menu">
              <li>
                <Link to="/movie/favorites">
                  <button className="dropdown-item" type="button">
                    Favoritos
                  </button>
                </Link>
              </li>

              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={handlelogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>

          <li className="nav-item d-md-none">
            <button className="btn btn-warning col-12" type="button">
              {logged}
            </button>
          </li>

          <li className="nav-item d-md-none my-3">
            <Link to="/movie/favorites">
              <button
                className="btn btn-warning col-12 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-expanded="false"
                aria-controls="navbarSupportedContent"
              >
                Favoritos
              </button>
            </Link>
          </li>
          <li className="nav-item d-md-none">
            <button
              className="btn btn-warning col-12"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-expanded="false"
              aria-controls="navbarSupportedContent"
              onClick={handlelogout}
            >
              Logout
            </button>
          </li>
        </>
      )}
    </li>
  );
};
