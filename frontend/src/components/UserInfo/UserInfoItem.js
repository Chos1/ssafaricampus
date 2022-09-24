import BtnPTxt from '../ui/BtnPTxt'

import styles from './UserInfoItem.module.css';


const UserInfoItem = (props) => {
  return (
    <div className={styles.UserInfoItem}>
      <div>
        <h2>이름(아이디)</h2>
        <p>이메일</p>
        <p>010-0000-0000</p>
      </div>
      <div className={styles.Passchange}>
        <BtnPTxt >비밀번호 변경</BtnPTxt>
      </div>
      {/* Your account is: {props.account}
      <h1>Contacts</h1>
      <ul>
        {Object.keys(props.contacts).map((contact, index) => (
          <li key={`${props.contacts[index].name}-${index}`}>
            <h4>{props.contacts[index].name}</h4>
            <span>
              <b>Phone: </b>
              {props.contacts[index].phone}
            </span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default UserInfoItem;