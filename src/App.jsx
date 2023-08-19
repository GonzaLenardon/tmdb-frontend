import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router";
import { MoviePage } from "./pages/MoviePage";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { useEffect } from "react";
import { setUser } from "./redux/slice/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    token();
  }, []);

  const token = async () => {
    /*   axios
      .get("http://localhost:3000/user/me", { withCredentials: true })
      .then((res) => console.log(res.data)); */

    const peticion = await fetch(`http://localhost:3000/user/me`, {
      credentials: "include",
    });
    console.log(peticion);
    const res = await peticion.json();
    console.log(res);
    dispatch(setUser({ name: res.name, email: res.email }));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>

      {/*  <Home /> */}
    </>
  );
}

export default App;
