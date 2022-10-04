// packages
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// css
import "./css/Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  const imagelist = [
    "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/193dd05d-7b23-4bf2-8623-b8608252d64a.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/ba7d0d94-b231-421f-996e-c8968107f14a.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/54561bc5-697e-4249-a6dd-27d29dec732f.jpg",
    // "https://svrforum.com/files/attach/images/2022/01/30/b417e9aef0f5f46b6f972f4fa5fbbbbf.jpg",
    // "https://t1.daumcdn.net/cfile/tistory/251D663957D6C93D05",
    // "https://i.pinimg.com/originals/ab/a4/a7/aba4a7e7cedc3a22664466b15a211a09.jpg"
  ];

  const imageCarousel = imagelist.map((image, idx) => {
    return (
      <SwiperSlide key={idx}>
        <img
          className="img-back"
          src={image}
          alt=""
          onClick={() => {
            navigate("/products/:productId");
          }}
        />
      </SwiperSlide>
    );
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
        modules={[Pagination, Autoplay]}
      >
        {imageCarousel}
      </Swiper>
    </div>
  );
};

export default Banner;
