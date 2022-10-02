import WalletCarousel from "./WalletCarousel";
import AddWalletBtn from "./AddWalletBtn";
import ReactTooltip from "react-tooltip";
import useEth from "../../contexts/EthContext/useEth";
import Loading from "../ui/Loading.js";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";

import styles from "./WalletItem.module.css";

const WalletItem = (props) => {
  const { state } = useEth();
  const [TimeCheck, setTimeCheck] = useState(true);

  let WalletTitle = (
    <div>
      <h2>지갑 연결</h2>
    </div>
  );

  if (state.account) {
    WalletTitle = (
      <>
        <h2>지갑 관리</h2>
        <div>
          <AiOutlineInfoCircle data-for="walletName" data-tip onClick={() => doCopy(state.account)} size="25" className={styles.walletInfo} />
        </div>
        <ReactTooltip id="walletName" getContent={(dataTip) => state.account}></ReactTooltip>
      </>
    );
  }

  let Wallet = <div></div>;

  if (state.account) {
    Wallet = <WalletCarousel />;
  } else {
    if (TimeCheck === true) {
      setTimeout(() => {
        setTimeCheck(false);
      }, 700);
      Wallet = <Loading className={styles.LoadingCircle} role={props.role}/>;

    } else {
      Wallet = <AddWalletBtn />;
    }
  }
  const doCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("클립보드에 복사되었습니다.");
      })
      .catch(() => {
        alert("복사를 다시 시도해주세요.");
      });
  };

  return (
    <div className={styles.WalletItem}>
      <div className={styles.WalletTitle}>{WalletTitle}</div>
      {Wallet}
    </div>
  );
};

export default WalletItem;
