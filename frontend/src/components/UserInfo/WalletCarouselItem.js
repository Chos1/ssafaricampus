import XsWBtnPBrd from "../ui/XsWBtnPBrd";
import XsPBtn from "../ui/XsPBtn";
import XsWBtnKBrd from "../ui/XsWBtnKBrd";
import XsKBtn from "../ui/XsKBtn";
import { useSelector } from "react-redux";
import useEth from "../../contexts/EthContext/useEth";

import styles from "./WalletCarouselItem.module.css";

const WalletCarouselItem = (props) => {
  const myRole = useSelector((state) => state.user.role);
  const { state } = useEth();
  let UserInfoStyle = "";

  if (myRole === "USER") {
    UserInfoStyle = (
      <div className={styles.btn_div}>
        <XsPBtn>충전</XsPBtn>
        <XsWBtnPBrd>출금</XsWBtnPBrd>
      </div>
    );
  } else {
    UserInfoStyle = (
      <div className={styles.btn_div}>
        <XsKBtn>충전</XsKBtn>
        <XsWBtnKBrd>출금</XsWBtnKBrd>
      </div>
    );
  }
  let balance = state.balance;
  let unit = "";

  balance = (state.balance / 1e18).toFixed(4);
  unit = "eth";
  let cash = (balance * 20000000).toLocaleString("ko-KR");

  return (
    <div className={styles.WalletCarouselItem}>
      <h2>{props.title}</h2>
      <p>
        {balance} {unit} ({cash}) 원
      </p>
      {UserInfoStyle}
    </div>
  );
};

export default WalletCarouselItem;
