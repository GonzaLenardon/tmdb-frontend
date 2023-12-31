import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "../common/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../css/index.css";
import { popularMovie } from "../redux/thunks/movieThunks";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { NavPopular } from "../common/NavPopular";

export const PopularMovie = () => {
  const dispatch = useDispatch();
  const popular = useSelector((state) => state.movie.popular);
  const page = useSelector((state) => state.movie.pagination.pagePopular);

  useEffect(() => {
    dispatch(popularMovie(page));
  }, [page]);

  return (
    <>
      <div className="container-fluid">
        <p className="fw-bolder text-warning text-center mt-3 clasificacionMovie">
          Popular
        </p>
        <Swiper
          key={popular}
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
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {popular.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard key={movie.id} movie={movie} />
            </SwiperSlide>
          ))}
          <NavPopular />
        </Swiper>
      </div>
    </>
  );
};
