// packages
import { useSelector } from "react-redux";
// utils
import useEth from "../../contexts/EthContext/useEth";
// css
import styles from "./css/WalletCarouselItem.module.css";
import XsPBtn from "../ui/XsPBtn";
import XsKBtn from "../ui/XsKBtn";
import XsWBtnPBrd from "../ui/XsWBtnPBrd";
import XsWBtnKBrd from "../ui/XsWBtnKBrd";

const WalletCarouselItem = (props) => {
  const myRole = useSelector((state) => state.user.role);
  const { state } = useEth();
  let UserInfoStyle = "";
  const chargeMoney = () => {
    alert("충전되었습니다!");
  };
  const outMoney = () => {
    alert("출금되었습니다!");
  };

  if (myRole === "USER") {
    UserInfoStyle = (
      <div className={styles.btn_div}>
        <XsPBtn onClick={chargeMoney}>충전</XsPBtn>
        <XsWBtnPBrd onClick={outMoney}>출금</XsWBtnPBrd>
      </div>
    );
  } else {
    UserInfoStyle = (
      <div className={styles.btn_div}>
        <XsKBtn onClick={chargeMoney}>충전</XsKBtn>
        <XsWBtnKBrd onClick={outMoney}>출금</XsWBtnKBrd>
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
        {balance} {unit} ({cash} 원)
      </p>
      {UserInfoStyle}
    </div>
  );
};

export default WalletCarouselItem;
