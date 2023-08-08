import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router";

import { MoviePage } from "./pages/MoviePage";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";

function App() {
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
