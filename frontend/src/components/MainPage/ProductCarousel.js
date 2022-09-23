import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import './ProductCarousel.css';

import { Navigation } from "swiper";

const ProductCarousel = () =>{
  return(
    <div className="App">
      <h2 className="ProductList_title">공동 구매 어쩌구</h2>
      <Swiper
      grabCursor={true}
      className="mySwiper"
      slidesPerView={4}
      spaceBetween={10}
      navigation={true} 
      modules={[Navigation]}
      >
        <SwiperSlide className="border_out">
          1
        </SwiperSlide>
        <SwiperSlide className="border_out">
          1
        </SwiperSlide>
        <SwiperSlide className="border_out">
          1
        </SwiperSlide>
        <SwiperSlide className="border_out">
          1
        </SwiperSlide>
        <SwiperSlide className="border_out">
          1
        </SwiperSlide>
        <SwiperSlide className="border_out">
          1
        </SwiperSlide>
        <SwiperSlide className="border_out">
          1
        </SwiperSlide>
        <SwiperSlide className="border_out">
          1
        </SwiperSlide>
        <SwiperSlide className="border_out">
          1
        </SwiperSlide>
        {/* Product Item 부분
        {DBdata.map((item) => (
          <SwiperSlide>
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
          </SwiperSlide>
        ))} 
        */}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;