// packages
import { useNavigate } from "react-router-dom";
// css
import styles from "./css/OrderItem.module.css";

const OrderItem = (props) => {
  const navigate = useNavigate();
  const {title, subtitle, isComplete, totalPrice, imgURL, contractID, totalPeople, paidPeople, productID} = props.contractInfo
  return (
    <div>
      <div className={styles.OrderItem}>
          <img
            className={styles.OrderImg}
            src={imgURL}
            alt="상품사진"
            onClick={() => {
              navigate("/orderDetail/" + productID + '/' + contractID);
            }}
          />
        <div
          className={styles.OrderTitle}
          onClick={() => {
            navigate("/orderDetail/" + productID + '/' + contractID);
          }}
        >
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
        <div className={styles.OrderCheck}>
          <p>{isComplete? '결제 완료' : '결제 진행중 ( ' + paidPeople + ' / ' + totalPeople + ' )'}</p>
        </div>
        <div className={styles.OrderCost}>
          <p>{(totalPrice * 1).toLocaleString('ko-KR')}원</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default OrderItem;
