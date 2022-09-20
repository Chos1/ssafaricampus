import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import './ProductItem.css';

import { Navigation } from "swiper";

const ProductItem = () =>{
  return(
    <div className="App">
      <h2 className="ProductList_title">공동 구매 어쩌구</h2>
      <Swiper
      freeMode={false}
      grabCursor={true}
      className="mySwiper"
      slidesPerView={4}
      spaceBetween={10}
      navigation={true} 
      modules={[Navigation]}
      className="mySwiper">
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
      </Swiper>
    </div>
  );
}

export default ProductItem;