import { ToastContainer, toast, Slide } from "react-toastify";
import { useSelector } from "react-redux";

export const ToastFavorite = () => {
  const msgFavorite = useSelector((state) => state.movie.MsjFavorite);

  console.log("dkfjldsfkjlasdkjf", msgFavorite);

  toast[msgFavorite.peticion](msgFavorite.mensaje);

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
    </>
  );
};
