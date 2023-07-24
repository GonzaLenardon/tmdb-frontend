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

export const UpCommingMovie = () => {
  const dispatch = useDispatch();

  const upcomming = useSelector((state) => state.movie.upcomming);

  useEffect(() => {
    dispatch(Upcomming());
  }, []);

  return (
    <>
      <div className="container-fluid ">
        <p className="fs-1 fw-bolder text-warning text-center">Up Comming</p>
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
