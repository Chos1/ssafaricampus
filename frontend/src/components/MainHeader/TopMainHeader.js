
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserHeader from './UserHeader.js';
import LoginUserHeader from './LoginUserHeader.js';
import styles from './TopMainHeader.module.css';
import { ReactComponent as Reservation } from "../../assets/Logo.svg";

const TopMainHeader = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const userHeader = isAuth ? <LoginUserHeader /> : <UserHeader />

  return (
      <div className={styles.justify_between}>
        <div className={styles.Logo}>
         
          <NavLink to='/main'>
          <Reservation width="18rem" height="6rem" />
            </NavLink>
        </div>
        <div className={styles.inputPosition}>
          <input type="text" name="searchBar" placeholder="검색어를 입력하세요." className={styles.Search_input} />
        </div>
        {userHeader}
      </div>
  );
};

export default TopMainHeader;