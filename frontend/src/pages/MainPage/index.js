// packages
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
// import cogoToast from 'cogo-toast';
// components
import Banner from "./Banner.js";
import ProductCarousel from "./ProductCarousel.js";
import Loading from "../../components/ui/Loading.js";

import useEth from "../../contexts/EthContext/useEth";

import styles from "./css/MainHeader.module.css"

const MainPage = () => {
  const location = useLocation();
  const { state } = useEth();
  const navigate = useNavigate();
  const [TimeCheck, setTimeCheck] = useState(true);

  let MainCompo = <></>;
  const isSearch = location.pathname.split('/')[3] ? true : false;
  const banner = isSearch ? null : <Banner />;

  if (state.account) {
    MainCompo = (
      <>
        {banner}
        <ProductCarousel />
      </>
    );
  } else {
    if (TimeCheck === true) {
      setTimeout(() => {
        setTimeCheck(false);
      }, 1000);
      MainCompo = 
      <div className={styles.loading_center}>
        <Loading />
      </div>
    } else {
      alert("MyPage에서 지갑을 연결하세요")
      // cogoToast.success('지갑을 연결하세요');
      navigate('/mypage')
    }
  }

  return <div>{MainCompo}</div>;
};

export default MainPage;
