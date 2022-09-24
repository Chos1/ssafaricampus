import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./Banner.css";

import { Pagination, Autoplay } from "swiper";

const Banner = () => {
  const navigate = useNavigate();
  const imagelist = [
    "https://vlee.kr/wp-content/uploads/2020/03/%EC%95%84%EC%9D%B4%EC%9C%A0_01_3840.jpg",
    "https://windowsforum.kr/files/attach/images/2966154/140/357/013/82ead915aec3eb937803eebfeabe7c77.jpg",
    "https://t1.daumcdn.net/cfile/tistory/9958783F5EDE12B00E",
    "https://svrforum.com/files/attach/images/2022/01/30/b417e9aef0f5f46b6f972f4fa5fbbbbf.jpg",
    "https://t1.daumcdn.net/cfile/tistory/251D663957D6C93D05",
    "https://i.pinimg.com/originals/ab/a4/a7/aba4a7e7cedc3a22664466b15a211a09.jpg"
  ]

  const imageCarousel = imagelist.map((image, idx) => {
    return (
      <SwiperSlide key={idx}>
        <img
          className="img-back"
          src={image}
          alt=""
          onClick={() => {navigate('/products/:productId')}}
        />
      </SwiperSlide>
    )
  });

  return (
    <div className="Main-Carousel">
      <Swiper 
        grabCursor={true}
        className="mySwiper"
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
      >
        {imageCarousel}
      </Swiper>
    </div>
  );
};

export default Banner;
