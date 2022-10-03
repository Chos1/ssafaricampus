import Banner from "../components/MainPage/Banner.js";
import ProductCarousel from "../components/MainPage/ProductCarousel.js";
import Loading from "../components/ui/Loading.js";

const MainPage = () => {
  return (
    <div>
      <Banner />
      <ProductCarousel />
      <Loading />
    </div>
  );
};

export default MainPage;
