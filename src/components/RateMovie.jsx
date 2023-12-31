import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "../common/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../css/index.css";
import { ratedMovie } from "../redux/thunks/movieThunks";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { NavRate } from "../common/NavRate";

export const RateMovie = () => {
  const dispatch = useDispatch();

  const rated = useSelector((state) => state.movie.rated);
  const page = useSelector((state) => state.movie.pagination.pageRate);

  useEffect(() => {
    dispatch(ratedMovie(page));
  }, [page]);

  return (
    <>
      <div className="container-fluid">
        <p className="fw-bolder text-warning text-center mt-3 clasificacionMovie">
          Top Rated
        </p>
        <Swiper
          key={"rateMovie"}
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
          {rated.map((movie, i) => (
            <SwiperSlide key={i}>
              <MovieCard key={movie.id} movie={movie} />
            </SwiperSlide>
          ))}
          <NavRate />
        </Swiper>
      </div>
    </>
  );
};
