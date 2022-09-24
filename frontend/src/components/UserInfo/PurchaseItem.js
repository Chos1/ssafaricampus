import styles from './PurchaseItem.module.css';
// import { ReactComponent as Reservation } from "../assets/Customer.svg";


const PurchaseItem = (props) => {
  return (
    <div>
      <div className={styles.PurchaseItem}>
        <div className={styles.PurchaseImg}>
          <p>이미지</p>
        </div>
        <div className={styles.PurchaseTitle}>
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