import React, { Component } from "react";
import Slider from "react-slick";
import "./ProductCarousel.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default class ProductCarousel extends Component {
  render() {
    const settings = {
      arrows:false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    };
    return (
      <div className="Main-Carousel">
        <Slider {...settings}>
          <div>
            <img className="img-back" src="https://vlee.kr/wp-content/uploads/2020/03/%EC%95%84%EC%9D%B4%EC%9C%A0_01_3840.jpg" alt="" />
          </div>
          <div>
            <img className="img-back" src="https://windowsforum.kr/files/attach/images/2966154/140/357/013/82ead915aec3eb937803eebfeabe7c77.jpg" alt="" />
          </div>
          <div>
            <img className="img-back" src="https://t1.daumcdn.net/cfile/tistory/9958783F5EDE12B00E" alt="" />
          </div>
          <div>
            <img className="img-back" src="https://svrforum.com/files/attach/images/2022/01/30/b417e9aef0f5f46b6f972f4fa5fbbbbf.jpg" alt="" />
          </div>
          <div>
            <img className="img-back" src="https://t1.daumcdn.net/cfile/tistory/251D663957D6C93D05" alt="" />
          </div>
          <div>
            <img className="img-back" src="https://i.pinimg.com/originals/ab/a4/a7/aba4a7e7cedc3a22664466b15a211a09.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}