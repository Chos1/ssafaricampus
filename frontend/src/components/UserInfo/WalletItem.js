import WalletCarousel from "./WalletCarousel";
import AddWalletBtn from "./AddWalletBtn";
import ReactTooltip from "react-tooltip";
import useEth from "../../contexts/EthContext/useEth";

import { AiOutlineInfoCircle } from "react-icons/ai";

import styles from "./WalletItem.module.css";

const WalletItem = (props) => {
  const Wallet = props.isWallet ? <WalletCarousel /> : <AddWalletBtn />;
  const { state } = useEth();
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
      <div className={styles.WalletTitle}>
        <h2>지갑관리</h2>
        <div>
          <AiOutlineInfoCircle data-for="walletName" data-tip onClick={() => doCopy(state.account)} size="25" className={styles.walletInfo} />
        </div>
        <ReactTooltip id="walletName" getContent={(dataTip) => "지갑주소"}></ReactTooltip>
      </div>
      {Wallet}
    </div>
  );
};

export default WalletItem;
