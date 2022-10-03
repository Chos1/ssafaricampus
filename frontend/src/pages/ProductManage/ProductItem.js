// packages
import { useNavigate } from "react-router-dom";
// css
import styles from "./css/ProductItem.module.css";

const ProductItem = (props) => {
  const navigate = useNavigate();
  let link = "/orderDetail/" + props.good[0];

  const move = () => {
    navigate(link, {
      state: {
        itemNo: props.good[0],
      },
    });
  };
  return (
    <div className={styles.ProductItem} onClick={move}>
      <div className={styles.card}>
        <div className={styles.card_top}>
          <img src={props.good[5]} alt="상품사진" />
        </div>
        <div className={styles.card_bottom}>
          <h1>{props.good[1]}</h1>
          <h3>{props.good[3]}</h3>
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
