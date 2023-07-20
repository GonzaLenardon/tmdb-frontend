import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "../common/MovieCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../css/index.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export const PopularMovie = () => {
  const [popular, setPopular] = useState([]);
  const [rated, setRated] = useState([]);

  useEffect(() => {
    getPopular();
    getLatest();
  }, []);

  const getPopular = async () => {
    try {
      let peticion = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=a41ce438a072ada11ff592899af27e5b"
      );
      let resp = await peticion.json();
      setPopular(resp.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getLatest = async () => {
    try {
      let peticion = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=a41ce438a072ada11ff592899af27e5b"
      );
      let resp = await peticion.json();
      setRated(resp.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="pt-2">Popular</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {popular.map((movie) => (
            <>
              <SwiperSlide key={movie.id}>
                <MovieCard key={movie.id} movie={movie} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>

      <div className="container ">
        <h2 className="pt-2">Top Rated</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {rated.map((movie) => (
            <>
              <SwiperSlide key={movie.id}>
                <MovieCard key={movie.id} movie={movie} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};
