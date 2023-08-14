import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slice/userSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const ButtonUser = () => {
  const logged = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handlelogout = () => {
    dispatch(setUser(""));
    navigator("/");
  };

  return (
    <>
      {!logged ? (
        <Link to="/login">
          <button type="button" className="btn btn-warning">
            Login
          </button>
        </Link>
      ) : (
        <div className="dropdown">
          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {logged}
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Favoritos
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button"></button>
            </li>
            <li>
              <button className="dropdown-item" type="button"></button>
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
      )}
    </>
  );
};
