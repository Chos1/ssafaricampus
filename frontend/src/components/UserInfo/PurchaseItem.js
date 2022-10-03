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
          <p>{props.title}</p>
          <p>{props.subtitle}</p>
        </div>
        <div className={styles.PurchaseCheck}>
          <p>결제 내역</p>
        </div>
        <div className={styles.PurchaseCost}>
          <p>{props.price}원</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PurchaseItem;
