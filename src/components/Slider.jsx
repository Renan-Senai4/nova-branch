import React from "react";
import { Swiper } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

const Slider = ({ settings, children }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1000}
      loop={true}
      centeredSlides={true}
      grabCursor={true}
      navigation={true}
      pagination={{
        clickable: true,
        disableOnInteraction: false,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      {...settings}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
