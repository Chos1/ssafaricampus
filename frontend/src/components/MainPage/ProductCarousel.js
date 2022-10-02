import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

import "swiper/css";
import "swiper/css/navigation";

import "./ProductCarousel.css";

import { Navigation } from "swiper";

const ProductCarousel = () => {
  const {
    state: { contract, account },
  } = useEth();
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const displayItems = async () => {
      const itemArray = await contract.methods.viewItems().call({ from: account });
      setItems(itemArray);
    };

    displayItems();
  }, [account, contract, items]);

  const itemCarousel = items.map((item, idx) => {
    let link = "/products/" + item.item_No;

    const move = () => {
      navigate(link, {
        state: {
          itemNo: item.item_No,
        },
      });
    };
    return (
      <SwiperSlide key={idx} onClick={move} className="border_out">
        <ProductItem item={item} />
      </SwiperSlide>
    );
  });

  return (
    <div className="App">
      <h2 className="ProductList_title">공동 구매 어쩌구</h2>
      <Swiper grabCursor={true} className="mySwiper" slidesPerView={4} navigation={true} modules={[Navigation]}>
        {itemCarousel}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
