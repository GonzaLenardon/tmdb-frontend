import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseInput from "../hooks/UseInput";
import { login } from "../redux/thunks/userThunks";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slice/userSlice";
import { useNavigate } from "react-router";

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
      <div className="container-fluid rounded form w-25 p-5 mt-5">
        <form onSubmit={handelLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              {...email}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="Password"
              {...password}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};
