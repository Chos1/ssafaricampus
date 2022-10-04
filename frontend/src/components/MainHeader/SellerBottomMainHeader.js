// packages
import { NavLink } from "react-router-dom";
// css
import styles from "./css/BottomMainHeader.module.css";

const SellerBottomMainHeader = () => {
  return (
    <div className={styles.justify_center_seller}>
      <ul>
        <li>
          <NavLink to="/orderManage">오더 매니지먼트</NavLink>
        </li>
        <li>
          <NavLink to="/productManage">상품 확인</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SellerBottomMainHeader;
