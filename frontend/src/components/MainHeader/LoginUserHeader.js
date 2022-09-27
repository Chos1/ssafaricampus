import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import apiPath from '../../api/apiPath';
import { authActions } from '../../store/auth';
import { userActions } from '../../store/user';

import styles from './LoginUserHeader.module.css'
import { persistor } from '../../store';

const LoginUserHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  
  async function logout() {
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(apiPath.auth.logout(), {
      method: 'POST'
      });
      // const data = await response.json();

      localStorage.removeItem('token');
      persistor.pause();
      persistor.flush().then(() => {
        return persistor.purge();
      });
      dispatch(authActions.logout());
      dispatch(userActions.logout());
      navigate('/main');
    }

    const logoutHandler = (e) => {
      logout();
    }

    
    
  return (
    <div className={styles.Login_ul}>
      <ul>
        <li>
          <button onClick={() => {navigate('/mypage')}} className={styles.username}>{name}</button>
        </li>
        <li>
          <button onClick={logoutHandler} className={styles.Logout}>Logout</button>
        </li>
      </ul>   
    </div>
  );
};

export default LoginUserHeader;