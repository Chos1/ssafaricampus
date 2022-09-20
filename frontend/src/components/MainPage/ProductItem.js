import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './ProductItem.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function ProductItem(){
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="App">
      <h2 className="ProductList_title">오늘의 상품이었던 것</h2>
      <Slider {...settings}>
        <div className="border_out">
          <h3>1</h3>
        </div>
        <div className="border_out">
          <h3>2</h3>
        </div>
        <div className="border_out">
          <h3>3</h3>
        </div>
        <div className="border_out">
          <h3>4</h3>
        </div>
        <div className="border_out">
          <h3>5</h3>
        </div>
        <div className="border_out">
          <h3>6</h3>
        </div>
        <div className="border_out">
          <h3>7</h3>
        </div>
        <div className="border_out">
          <h3>8</h3>
        </div>
        {/* </div>
        {DBdata.map((item) => (
          <div className="card">
            <div className="card-top">
              <img src="{item.linkIng}" alt="{item.title}" />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <p>{item.한줄 설명}</p>
            </div>
          </div>
        ))} */}
      </Slider>
    </div>
  );
}


export default ProductItem;