import { useNavigate } from "react-router-dom";
import styles from "./ProductItem.module.css";

const ProductItem = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.ProductItem}
      onClick={() => {
        navigate("/orderDetail/:orderId");
      }}
    >
      <div className={styles.card}>
        <div className={styles.card_top}>
          <img src={props.tUrl} alt="상품사진" />
          <h1>{props.title}</h1>
        </div>
        <div className={styles.card_bottom}>
          <h1>{props.title}</h1>
          <h3>{props.price}</h3>
        </div>
      </div>
      {/* <div className="card">
          <div className="card-top">
            <img src="{item.img_link}" alt="{item.title}" />
            <h1>{item.title}</h1>
          </div>
          <div className="card-bottom">
            <h3>{item.price}</h3>
            <p>{item.한줄 설명}</p>
          </div>
        </div> */}
    </div>
  );
};

export default ProductItem;
