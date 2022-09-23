import { useState } from 'react';
import { Link } from 'react-router-dom';

import apiPath from '../../api/apiPath';
import LPBtn from '../ui/LPBtn';
import LWBtnPBrd from '../ui/LWBtnPBrd';

import './LoginForm.css';

const LoginForm = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();
    login(loginId, password);
    setLoginId('');
    setPassword('');
  }
  const loginIdChangeHandler = (e) => {
    setLoginId(e.target.value);
  }
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }

  async function login(loginId, password) {
    const response = await fetch(apiPath.auth.login(), {
      method: 'POST',
      body: JSON.stringify({
        'loginId': loginId,
        'password': password,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    localStorage.setItem('token', data.accessToken);
  }

  return (
    <div className="Login_inputgroup">
      <form onSubmit={loginHandler}>
        <input placeholder="아이디를 입력해주세요" type='text' value={loginId} onChange={loginIdChangeHandler} />
        <br/>
        <input placeholder="비밀번호를 입력해주세요" type='password' value={password} onChange={passwordChangeHandler} />
        <br/>
        <br/>
        <LPBtn type='submit' onClick={loginHandler}>로그인</LPBtn>
      </form>
      <Link to='/signup'><LWBtnPBrd>회원가입</LWBtnPBrd></Link>
    </div>
  );
};


export default LoginForm;