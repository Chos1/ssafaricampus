// packages
import { useNavigate } from "react-router-dom";
// css
import styles from "./css/OrderItem.module.css";

const OrderItem = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.OrderItem}>
        <div
          className={styles.OrderImg}
          onClick={() => {
            navigate("/mypage/:transactionId/transactionDetail");
          }}
        >
          <p>이미지</p>
        </div>
        <div
          className={styles.OrderTitle}
          onClick={() => {
            navigate("/mypage/:transactionId/transactionDetail");
          }}
        >
          <p>{props.title}</p>
          <p>{props.subtitle}</p>
        </div>
        <div className={styles.OrderCheck}>
          <p>결제 내역</p>
        </div>
        <div className={styles.OrderCost}>
          <p>{props.price}원</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default OrderItem;
