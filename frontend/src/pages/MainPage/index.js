// packages
import { useLocation } from "react-router-dom";
// components
import Banner from "./Banner.js";
import ProductCarousel from "./ProductCarousel.js";

const MainPage = () => {
  const banner = useLocation().pathname.split("/")[2] ? null : <Banner />;

  return (
    <div>
      {banner}
      <ProductCarousel />
    </div>
  );
};

export default MainPage;
