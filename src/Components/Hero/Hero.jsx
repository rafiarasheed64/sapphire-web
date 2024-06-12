import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Slideimg1 from "../Assets/home-page-slider-1.jpg"
import Slideimg2 from "../Assets/home-page-slider-2.jpg"

const Hero = () => {
  return (
    <>
   <Swiper
    slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}

              modules={[Autoplay,Navigation]}
              className="mySwiper"
   >
        <SwiperSlide><img src={Slideimg1} className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide><img src={Slideimg2} className='img-fluid' alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Hero