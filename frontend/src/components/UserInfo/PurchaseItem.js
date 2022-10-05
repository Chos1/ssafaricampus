// packages
import { useNavigate } from "react-router-dom";
// css
import styles from "./css/PurchaseItem.module.css";

console.log("1" < "10");

const PurchaseItem = (props) => {
  const navigate = useNavigate();

  let completed_cont = <></>;

  if (props.cont.completed) {
    completed_cont = <>구매확정</>;
  } else {
    if (props.cont.paid_people * 1 < props.cont.total_people * 1) {
      completed_cont = (
        <>
          {props.cont.paid_people} / {props.cont.total_people}{" "}
        </>
      );
    } else {
      completed_cont = <>구매대기</>;
    }
  }

  console.log(props);
  return (
    <div>
      <div className={styles.PurchaseItem}>
        <div
          className={styles.PurchaseImg}
          onClick={() => {
            navigate("/mypage/:transactionId/transactionDetail");
          }}
        >
          <img src={props.item.thumbnail_picture} alt=""></img>
        </div>
        <div
          className={styles.PurchaseTitle}
          onClick={() => {
            navigate("/mypage/:transactionId/transactionDetail");
          }}
        >
          <p>상품명: {props.item.item_name}</p>
        </div>
        <div className={styles.PurchaseCheck}>
          <p>상품 가격: {props.item.item_price}</p>
        </div>
        <div className={styles.PurchaseCheck}>
          <p>구매신청자: {props.cont.purchase_name}</p>
        </div>
        <div className={styles.PurchaseCost}>
          <p>배송지: {props.cont.shipping_address}</p>
        </div>
        <div className={styles.PurchaseCost}>
          <p>{completed_cont}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PurchaseItem;
