import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard } from "../common/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../css/index.css";
import { Upcomming } from "../redux/thunks/movieThunks";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { NavUpCom } from "../common/NavUpCom";

export const UpComMovie = () => {
  const dispatch = useDispatch();

  const upcomming = useSelector((state) => state.movie.upcomming);

  const page = useSelector((state) => state.movie.pagination.pageUpcom);

  useEffect(() => {
    dispatch(Upcomming(page));
  }, [page]);

  return (
    <>
      <div className="container-fluid ">
        <p className="fw-bolder text-warning text-center mt-3 clasificacionMovie">
          Upcoming
        </p>
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
          {upcomming.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard key={movie.id} movie={movie} />
            </SwiperSlide>
          ))}
          <NavUpCom />
        </Swiper>
      </div>
    </>
  );
};
