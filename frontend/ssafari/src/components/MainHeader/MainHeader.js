import { NavLink } from 'react-router-dom';

import styles from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink to='/main'>
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to='/login'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to='/signup'>
              SignUp
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;