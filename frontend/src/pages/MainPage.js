import { useLocation } from "react-router-dom";

import Banner from "../components/MainPage/Banner.js";
import ProductCarousel from "../components/MainPage/ProductCarousel.js";
const MainPage = () => {
  const banner = useLocation().pathname.split("/")[2] ? null : <Banner />;
  console.log(banner);

  return (
    <div>
      {banner}
      <ProductCarousel />
    </div>
  );
};

export default MainPage;
