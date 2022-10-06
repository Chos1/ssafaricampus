// css
import styles from "./css/UserInfoItem.module.css";
import BtnPTxt from "../ui/BtnPTxt";
import { BsFillKeyFill } from "react-icons/bs";
import cogoToast from "cogo-toast";

const UserInfoItem = (props) => {
  const phoneNumber = props.phone.slice(0, 3) + "-" + props.phone.slice(3, 7) + "-" + props.phone.slice(7, 11);
  const EorN = props.companyNumber ? props.companyNumber : props.email;
  const passwordChange = () => {
    // alert("변경되었습니다!");
    cogoToast.info("변경되었습니다!", {
      hideAfter: 1,
    });
  };
  return (
    <div className={styles.UserInfoItem}>
      <div>
        <h2>
          {props.name} ({props.loginId}){" "}
        </h2>
        <p>{EorN}</p>
        <p>{phoneNumber}</p>
      </div>
      <div className={styles.Passchange}>
        <BtnPTxt onClick={passwordChange}>
          <BsFillKeyFill />
          비밀번호 변경
        </BtnPTxt>
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
