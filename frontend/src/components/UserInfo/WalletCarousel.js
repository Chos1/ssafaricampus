import WalletCarouselItem from "./WalletCarouselItem";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./WalletCarousel.module.css"

import { Navigation } from "swiper";

const WalletCarousel = () => {
  return (
    <div className={styles.div_size}>
      <Swiper
        grabCursor={true}
        className="mySwiper"
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <WalletCarouselItem title="ETH" />
        </SwiperSlide>
        <SwiperSlide>
          <WalletCarouselItem title="CASH" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WalletCarousel;
