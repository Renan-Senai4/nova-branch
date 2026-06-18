import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

const Slider = ({ settings = {}, children }) => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="mySwiper"
      {...settings}
    >
      {children}
    </Swiper>
  );
};

export default Slider;