import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router";
import { MoviePage } from "./pages/MoviePage";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { useEffect } from "react";
import { setUser } from "./redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { Favorites } from "./pages/Favorites";
import { Footer } from "./components/Footer";
import SearchMovie from "./components/SearchMovie";
import { ButtonUp } from "./components/ButtonUp";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    token();
  }, []);

  const token = async () => {
    /*   axios
      .get("http://localhost:3000/user/me", { withCredentials: true })
      .then((res) => console.log(res.data)); */

    const peticion = await fetch(`https://servicetmdb.onrender.com/user/me`, {
      credentials: "include",
    });
    const res = await peticion.json();
    dispatch(setUser({ name: res.name, email: res.email }));
  };

  return (
    <>
      <Navbar />
      <ButtonUp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/movie/favorites" element={<Favorites />} />
        <Route path="/movie/search" element={<SearchMovie />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
