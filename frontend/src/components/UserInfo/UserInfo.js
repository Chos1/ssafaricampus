import UserInfoItem from './UserInfoItem'
import WalletItem from './WalletItem';
import styles from './UserInfo.module.css';


const UserInfo = (props) => {

  const UserInfoStyle = props.role === "USER" ? styles.UserInfo : styles.SellerInfo

  return (
      <div className={UserInfoStyle}>
        <UserInfoItem name={props.name} loginId={props.loginId} email={props.email} phone={props.phone} role={props.role} companyNumber={props.companyNumber}/>
        <WalletItem isWallet={props.isWallet}/>
      </div>
  );
};

export default UserInfo;