import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import apiPath from '../../api/apiPath';
import { authActions } from '../../store/auth';

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
    <ul>
      <li>
        <button onClick={() => {navigate('/mypage')}}>username</button>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>   
  );
};

export default UserHeader;