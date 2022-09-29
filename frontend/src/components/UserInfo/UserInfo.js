import UserInfoItem from "./UserInfoItem";
import WalletItem from "./WalletItem";
import styles from "./UserInfo.module.css";
import EthProvider from "../../contexts/EthContext/EthProvider";

const UserInfo = (props) => {
  const UserInfoStyle =
    props.role === "USER" ? styles.UserInfo : styles.SellerInfo;

  return (
    <div className={UserInfoStyle}>
      <UserInfoItem
        name={props.name}
        loginId={props.loginId}
        email={props.email}
        phone={props.phone}
        role={props.role}
        companyNumber={props.companyNumber}
      />
      <EthProvider contract="SimpleStorage">
        <WalletItem isWallet={props.isWallet} />
      </EthProvider>
    </div>
  );
};

export default UserInfo;
