import WalletCarousel from "./WalletCarousel";
import AddWalletBtn from "./AddWalletBtn";

import styles from "./WalletItem.module.css";



const WalletItem = (props) => {

  const Wallet = props.isWallet ? <WalletCarousel /> : <AddWalletBtn />;

  return (
    <div className={styles.WalletItem}>
      <div className={styles.WalletTitle}>
        <h2>지갑관리</h2>
        <h3> ? </h3>
        <p className={styles.arrow_box}>여기에 지갑 주소?</p>
      </div>
      {/* <WalletCarousel />
      <AddWalletBtn /> */}
      {Wallet}
    </div>
  );
};

export default WalletItem;
