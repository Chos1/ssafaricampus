import XsWBtnPBrd from "../ui/XsWBtnPBrd"
import XsPBtn from "../ui/XsPBtn"
import XsWBtnKBrd from "../ui/XsWBtnKBrd"
import XsKBtn from "../ui/XsKBtn"
import { useSelector } from 'react-redux';


import styles from "./WalletCarouselItem.module.css"

const WalletCarouselItem = (props) => {
  const myRole = useSelector((state) => state.user.role);
  let UserInfoStyle = ''
  
  if (myRole === "USER"){
    UserInfoStyle=
    <div className={styles.btn_div}>
      <XsPBtn>충전</XsPBtn>
      <XsWBtnPBrd>출금</XsWBtnPBrd>
    </div>
  }else{
    UserInfoStyle=
    <div className={styles.btn_div}>
    <XsKBtn>충전</XsKBtn>
    <XsWBtnKBrd>출금</XsWBtnKBrd>
  </div>
  }

  return (
      <div className={styles.WalletCarouselItem}>
        <h2>{props.title}</h2>
        <p>price가져와</p>
        {UserInfoStyle}
      </div>
  );
};

export default WalletCarouselItem;