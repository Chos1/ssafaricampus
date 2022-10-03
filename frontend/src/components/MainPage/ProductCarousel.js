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
  // const [items, setItems] = useState([]);
  const [Clothes, setClothes] = useState([]);
  const [Foods, setFoods] = useState([]);
  const [setting_items, setSetting_items] = useState([]);

  const navigate = useNavigate();
  // const ItemDummy = [];
  const ClothDummy = [];
  const FoodDummy = [];
  const Setting_itemsDummy = [];
  // console.log(typeof(account))
  // 컴포 따로 만들어야하는데 안댐 ㅜ
  useEffect(() => {
    const displayItems = async () => {
      const itemArray = await contract.methods.viewItems().call({ from: account });
      for (let i = 0; i < itemArray.length ; i++){
        if (parseInt(itemArray[i][0]) >= 0){
          // ItemDummy.push(itemArray[i])
          if (itemArray[i][4] === "준비물"){
            Setting_itemsDummy.push(itemArray[i])
          }else if(itemArray[i][4] === "의류"){
            ClothDummy.push(itemArray[i])
          }else if(itemArray[i][4] === "식료품"){
            FoodDummy.push(itemArray[i])
        }
        }
      }
      // setItems(ItemDummy);
      setClothes(ClothDummy)
      setFoods(FoodDummy)
      setSetting_items(Setting_itemsDummy)
    };
    

    displayItems();
  }, [account, contract, Clothes, Foods, setting_items]);
  // // 전체 상품
  // const itemCarousel = items.map((item, idx) => {
  //   let link = "/products/" + item.item_No;
  //   const move = () => {
  //     navigate(link, {
  //       state: {
  //         itemNo: item.item_No,
  //       },
  //     });
  //   };
  //   return (
  //     <SwiperSlide key={idx} onClick={move} className="border_out">
  //       <ProductItem item={item} />
  //     </SwiperSlide>
  //   );
  // });

  // 의류
  const ClothesCarousel = Clothes.map((item, idx) => {
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

  // 식료품
  const FoodCarousel = Foods.map((item, idx) => {
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

  // 외 준비물
  const SettingCarousel = setting_items.map((item, idx) => {
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
      {/* <div className="Product_div">
        <h2 className="ProductList_title">전체 상품</h2>
        <Swiper grabCursor={true} className="mySwiper" slidesPerView={4} navigation={true} modules={[Navigation]}>
          {itemCarousel}
        </Swiper>
      </div> */}
      <div className="Product_div">
        <h2 className="ProductList_title">옷</h2>
        <Swiper grabCursor={true} className="mySwiper" slidesPerView={4} navigation={true} modules={[Navigation]}>
          {ClothesCarousel}
        </Swiper>
      </div>

      <div className="Product_div">
        <h2 className="ProductList_title">식품</h2>
        <Swiper grabCursor={true} className="mySwiper" slidesPerView={4} navigation={true} modules={[Navigation]}>
          {FoodCarousel}
        </Swiper>
      </div>
      <div className="Product_div">
        <h2 className="ProductList_title">그 외 것</h2>
        <Swiper grabCursor={true} className="mySwiper" slidesPerView={4} navigation={true} modules={[Navigation]}>
          {SettingCarousel}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCarousel;
