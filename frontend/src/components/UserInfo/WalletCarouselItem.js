import XsWBtnPBrd from "../ui/XsWBtnPBrd"
import XsPBtn from "../ui/XsPBtn"

import styles from "./WalletCarouselItem.module.css"

const WalletCarouselItem = (props) => {
  return (
      <div className={styles.WalletCarouselItem}>
        <h2>{props.title}</h2>
        <p>price가져와</p>
        <div className={styles.btn_div}>
          <XsPBtn>충전</XsPBtn>
          <XsWBtnPBrd>출금</XsWBtnPBrd>
        </div>
      </div>
  );
};

export default WalletCarouselItem;