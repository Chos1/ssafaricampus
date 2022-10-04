// packages
import { useNavigate } from "react-router-dom";
// css
import styles from "./css/ProductItem.module.css";

const ProductItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.product_item}>
      <div className={styles.card}>
        <div className={styles.card_top}>
          <img
            src={props.item[5]}
            onClick={() => {
              navigate("");
            }}
            alt="상품사진"
          />
        </div>
        <div className={styles.card_bottom}>
          <h1>{props.item[1]}</h1>
          <h3>{props.item[3]}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
