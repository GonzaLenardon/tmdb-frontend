import UseInput from "../hooks/UseInput";
import { AddUser } from "../redux/thunks/userThunks";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Signup = () => {
  const user = UseInput();
  const email = UseInput();
  const password = UseInput();
  const navigator = useNavigate();

  function msg({ mensaje, peticion }) {
    toast[peticion](mensaje);
  }

  const handleUser = (e) => {
    e.preventDefault();

    const newUser = {
      name: user.value,
      email: email.value,
      pass: password.value,
    };

    AddUser(newUser).then((newUser) => {
      if (newUser.peticion == "success") {
        msg(newUser);

        setTimeout(() => {
          navigator("/login");
        }, 4000);
      } else {
        msg(newUser);
      }
    });

    //AddUser(newUser).then((newUser) => msg(newUser));
    //  user.onreset();
    //  email.onreset();
    //  password.onreset();
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
      <div className="vh-100">
        {/*  <p className="fw-bolder text-warning mt-3 text-center clasificacionMovie border  ">
         */}{" "}
        <div className="col-10 col-sm-8 col-lg-4 py-5 mx-auto align-self-center h-75">
          <p className="display-4 fw-bolder text-center user">Sign Up</p>
          <div className="rounded-2 p-2 formulario p-5">
            <form onSubmit={handleUser}>
              <div className="mb-3">
                <label className="form-label">User Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  {...user}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email address *</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  {...email}
                />
              </div>

              <div className="mb-5">
                <label className="form-label">Password *</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  {...password}
                />
              </div>

              <div className="d-flex justify-content-center">
                <button className="btn btn-user fw-medium fs-5 mx-5 w-50">
                  Sign Up
                </button>
              </div>

              <div className="d-flex justify-content-end">
                <Link to={"/"}>
                  <button className="btn btn-outline-warning fs-6">
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
