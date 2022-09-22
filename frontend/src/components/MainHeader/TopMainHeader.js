
import { NavLink } from 'react-router-dom';
import UserHeader from './UserHeader.js'
import styles from './TopMainHeader.module.css'

const TopMainHeader = () => {
  return (
      <div className={styles.justify_between}>
        <div className={styles.Logo}>
          <NavLink to='/main'>LOGO</NavLink>
        </div>
        <div className={styles.inputPosition}>
          <input type="text" name="searchBar" placeholder="검색어를 입력하세요." />
        </div>
        <UserHeader />
      </div>
  );
};

export default TopMainHeader;