import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import apiPath from '../../api/apiPath';
import { authActions } from '../../store/auth';

import styles from './LoginUserHeader.module.css'

const UserHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  async function logout() {
    const response = await fetch(apiPath.auth.logout(), {
      method: 'POST'
      });
      
      const data = await response.json();
      console.log(data)
      localStorage.removeItem('token');
      dispatch(authActions.logout());
      navigate('/main');
    }

    const logoutHandler = (e) => {
      logout();
    }
    
  return (
    <div className={styles.Login_ul}>
      <ul>
        <li>
          <button onClick={() => {navigate('/mypage')}} className={styles.username}>username</button>
        </li>
        <li>
          <button onClick={logoutHandler} className={styles.Logout}>Logout</button>
        </li>
      </ul>   
    </div>
  );
};

export default UserHeader;