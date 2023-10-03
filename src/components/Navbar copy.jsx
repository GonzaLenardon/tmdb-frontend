import { Link } from "react-router-dom";
import { setUser } from "../redux/slice/userSlice";
import { ButtonUser } from "./ButtonUser";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const logged = useSelector((state) => state.user.name);
  //Empezamos

  return (
    <nav className="navbar navbar-expand-sm  navbar-dark bg-dark sticky-top ">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to={"/"}>
            <img
              className="img-fluid"
              src="/public/logo.svg"
              alt="Bootstrap"
              height="auto"
              width="100%"
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex my-3 ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <ul className="navbar-nav ms-auto">
            {!logged ? (
              <li className="nav-item  mx-sm-5">
                <Link to={"/signup"}>
                  <a
                    href=""
                    className="btn btn-warning col-12"
                    role="button"
                    aria-current="page"
                    aria-disabled="true"
                    aria-expanded="false"
                  >
                    SignUp
                  </a>
                </Link>
              </li>
            ) : (
              ""
            )}

            <li className="nav-item my-3 my-md-0 mx-sm-5">
              <ButtonUser />
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
