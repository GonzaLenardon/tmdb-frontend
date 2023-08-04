import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router";

import { MoviePage } from "./pages/MoviePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>

      {/*  <Home /> */}
    </>
  );
}

export default App;
