import { HomePage } from "./Pages/HomePage";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router";

import { DetailsMovie } from "./components/DetailsMovie";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailsMovie />} />
      </Routes>

      {/*  <Home /> */}
    </>
  );
}

export default App;
