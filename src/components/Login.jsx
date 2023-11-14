import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseInput from "../hooks/UseInput";
import { login } from "../redux/thunks/userThunks";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slice/userSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Login = () => {
  const email = UseInput();
  const password = UseInput();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  function msg({ mensaje, peticion }) {
    toast[peticion](mensaje);
  }

  const handelLogin = (e) => {
    e.preventDefault();

    const loginUser = {
      email: email.value,
      pass: password.value,
    };
    login(loginUser)
      .then((user) => {
        dispatch(setUser({ name: user.name, email: user.email }));
        msg(user);
        setTimeout(() => {
          if (user.peticion == "success") navigator("/");
        }, 4000);
      })

      .catch((error) => console.log(error));
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
        <div className="col-10 col-sm-8 col-lg-4 py-5 mx-auto align-self-center h-75 ">
          <p className="display-4 fw-bolder text-center user">Login</p>
          <div className="rounded-2 formulario">
            <div className="px-5 py-3">
              <form onSubmit={handelLogin}>
                <div className="py-3">
                  <label className="form-label">Email address * </label>
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
                    Login
                  </button>
                </div>
              </form>
            </div>

            <div className="d-flex justify-content-end pe-3 pb-2">
              <Link to={"/"}>
                <button className="btn btn-outline-warning fs-6">Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
