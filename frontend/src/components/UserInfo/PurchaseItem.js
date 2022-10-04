// packages
import { useNavigate } from "react-router-dom";
// css
import styles from "./css/PurchaseItem.module.css";

const PurchaseItem = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.PurchaseItem}>
        <div
          className={styles.PurchaseImg}
          onClick={() => {
            navigate("/mypage/:transactionId/transactionDetail");
          }}
        >
          <p>이미지</p>
        </div>
        <div
          className={styles.PurchaseTitle}
          onClick={() => {
            navigate("/mypage/:transactionId/transactionDetail");
          }}
        >
          <p>상품명 {props.item.item_name}</p>
        </div>
        <div className={styles.PurchaseCheck}>
          <p>상품 가격: {props.item.item_price}</p>
        </div>
        <div className={styles.PurchaseCheck}>
          <p>구매신청자: {props.cont.purchase_name}</p>
        </div>
        <div className={styles.PurchaseCost}>
          <p>{props.item.item_price}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PurchaseItem;
