import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import ProductItem from './ProductItem'


import "swiper/css";
import "swiper/css/navigation";

import './ProductCarousel.css';

import { Navigation } from "swiper";

const ProductCarousel = () =>{
  const navigate = useNavigate();

  const itemlist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


  const itemCarousel = itemlist.map((item, idx) => {
    let link = '/products/' + item

    const move = () => {
      navigate(link, {
        state: {
          itemNo : item,
        }
      });
    };
    return (
      <SwiperSlide key={idx} onClick={move} className="border_out">
        <ProductItem />
      </SwiperSlide>
    )
  })



  return(
    <div className="App">
      <h2 className="ProductList_title">공동 구매 어쩌구</h2>
      <Swiper
      grabCursor={true}
      className="mySwiper"
      slidesPerView={4}
      // spaceBetween={10}
      navigation={true} 
      modules={[Navigation]}
      >
        {itemCarousel}
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