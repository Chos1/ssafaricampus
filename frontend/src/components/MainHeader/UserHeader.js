import { NavLink } from 'react-router-dom';

import styles from './UserHeader.module.css'

const UserHeader = () => {
  return (
    <ul className={styles.loginUl}>
      <li className={styles.loginname}>
        <NavLink to='/login'>
          Login
        </NavLink >
      </li>
      <li>
        <NavLink to='/signup'>
          SignUp
        </NavLink>
      </li>
    </ul>   
  );
};

export default UserHeader;