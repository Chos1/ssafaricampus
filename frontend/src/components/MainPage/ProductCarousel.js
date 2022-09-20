import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./ProductCarousel.css";

import { Pagination, Autoplay } from "swiper";

const ProductCarousel = () => {

  return (
    <div className="Main-Carousel">
      <Swiper 
        freeMode={false}
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
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="img-back"
            src="https://vlee.kr/wp-content/uploads/2020/03/%EC%95%84%EC%9D%B4%EC%9C%A0_01_3840.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-back"
            src="https://windowsforum.kr/files/attach/images/2966154/140/357/013/82ead915aec3eb937803eebfeabe7c77.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-back"
            src="https://t1.daumcdn.net/cfile/tistory/9958783F5EDE12B00E"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-back"
            src="https://svrforum.com/files/attach/images/2022/01/30/b417e9aef0f5f46b6f972f4fa5fbbbbf.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-back"
            src="https://t1.daumcdn.net/cfile/tistory/251D663957D6C93D05"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-back"
            src="https://i.pinimg.com/originals/ab/a4/a7/aba4a7e7cedc3a22664466b15a211a09.jpg"
            alt=""
          />
        </SwiperSlide>

        {/* 컴포넌트로 해도 되긴함
        <SwiperSlide>
        {DBdata.map((item) => (
          <div className="card">
            <div className="card-top">
              <img src="{item.img_link}" alt="{item.title}" />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <p>{item.한줄 설명}</p>
            </div>
          </div>
        ))} 
        </SwiperSlide>*/}

      </Swiper>
    </div>
  );
};

export default ProductCarousel;
