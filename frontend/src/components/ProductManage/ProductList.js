import { useNavigate } from "react-router-dom";

import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";
import MKBtn from "../ui/MKBtn";

const ProductList = () => {
  const navigate = useNavigate();
  const goods = [
    ["제품1", "10000"],
    ["제품1", "20000"],
    ["제품3", "30000"],
    ["제품4", "40000"],
  ];
  const goodsList = goods.map((good, idx) => (
    <ProductItem key={idx} title={good[0]} price={good[1]} />
  ));

  return (
    <div className={styles.ProductList_container}>
      <div className={styles.buttonright}>
        <MKBtn
          onClick={() => {
            navigate("/productRegist");
          }}
        >
          상품 등록
        </MKBtn>
      </div>
      <div className={styles.gridList}>{goodsList}</div>
      {/* 페이지네이션 */}
    </div>
  );
};

export default ProductList;
