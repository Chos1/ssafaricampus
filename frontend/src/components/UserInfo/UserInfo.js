import UserInfoItem from './UserInfoItem'
import WalletItem from './WalletItem';
import styles from './UserInfo.module.css';


const UserInfo = (props) => {
  return (
      <div className={styles.UserInfo}>
        <UserInfoItem account={props.account} contacts={props.contacts}/>
        <WalletItem isWallet={props.isWallet}/>
      </div>
  );
};

export default UserInfo;