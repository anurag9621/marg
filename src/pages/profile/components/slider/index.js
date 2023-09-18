import React from 'react'


import "./index.css";
// import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
function Scroll(props) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={props.Img1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.Img2}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.Img3}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.Img4}></img>
        </SwiperSlide>

        <SwiperSlide>
          <img src={props.Img6}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.Img7}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.Img8}></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Scroll