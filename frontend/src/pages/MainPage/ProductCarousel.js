// packages
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate, useLocation } from "react-router-dom";
// utils
import useEth from "../../contexts/EthContext/useEth";
// components
import ProductItem from "./ProductItem";
// css
import "./css/ProductCarousel.css";
// assets
import BannerImg from "../../assets/Banner.jpg";

const ProductCarousel = () => {
  const location = useLocation().pathname;
  const {
    state: { contract, account },
  } = useEth();
  const [Clothes, setClothes] = useState([]);
  const [Foods, setFoods] = useState([]);
  const [setting_items, setSetting_items] = useState([]);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  if (location.split("/")[2] && keyword !== location.split("/")[3]) {
    setKeyword(location.split("/")[3]);
  }
  let isSearch = location.split("/")[2] === 'search' ? true : false;

  // 컴포 따로 만들어야하는데 안댐 ㅜ
  useEffect(() => {
    console.log(keyword);
    const ClothDummy = [];
    const FoodDummy = [];
    const Setting_itemsDummy = [];
    const displayItems = async () => {
      const itemArray = await contract.methods
        .viewItems()
        .call({ from: account });
      for (let i = 0; i < itemArray.length; i++) {
        if (parseInt(itemArray[i][0]) >= 0) {
          if (location.split("/")[2] && !itemArray[i][1].includes(keyword)) {
            continue;
          }
          if (itemArray[i][4] === "준비물") {
            Setting_itemsDummy.push(itemArray[i]);
          } else if (itemArray[i][4] === "의류") {
            ClothDummy.push(itemArray[i]);
          } else if (itemArray[i][4] === "식료품") {
            FoodDummy.push(itemArray[i]);
          }
        }
      }
      setClothes(ClothDummy);
      setFoods(FoodDummy);
      setSetting_items(Setting_itemsDummy);
    };

    displayItems();
  }, [account, contract, keyword, location]);
  if (isSearch && (Clothes.length + Foods.length + setting_items.length) < 1) {
    alert('검색 결과가 없습니다!');
    navigate('/main');
  }

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

  const ClothList = (Clothes.length < 1 ? null : <div className="Product_div">
  <h2 className="ProductList_title">옷</h2>
  <Swiper
    grabCursor={true}
    className="mySwiper"
    slidesPerView={4}
    navigation={true}
    modules={[Navigation]}
  >
    {ClothesCarousel}
  </Swiper>
</div>)


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

  const FoodList = (Foods.length < 1 ? null : <div className="Product_div">
  <h2 className="ProductList_title">식품</h2>
  <Swiper
    grabCursor={true}
    className="mySwiper"
    slidesPerView={4}
    navigation={true}
    modules={[Navigation]}
  >
    {FoodCarousel}
  </Swiper>
</div>);

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

  const OtherList = (setting_items.length < 1 ? null : <div className="Product_div">
  <h2 className="ProductList_title">그 외 것</h2>
  <Swiper
    grabCursor={true}
    className="mySwiper"
    slidesPerView={4}
    navigation={true}
    modules={[Navigation]}
  >
    {SettingCarousel}
  </Swiper>
</div>);

  return (
    <div className="App">
      {FoodList}
      <div className="Product_div">
        {isSearch? null : <img className="Event_Banner" src={BannerImg} alt="" />}
      </div>
      {ClothList}
      {OtherList}
    </div>
  );
};

export default ProductCarousel;
