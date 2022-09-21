import axios from 'axios';
import { useState } from 'react';

import apiPath from '../../api/apiPath';
import LPBtn from '../ui/LPBtn';
import MPBtnBrd from '../ui/MPBtnBrd';

import './LoginForm.css';

const LoginForm = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();

    login(loginId, password);

    console.log('login id: ' + loginId);
    console.log('password: ' + password);

    setLoginId('');
    setPassword('');
  }
  const loginIdChangeHandler = (e) => {
    setLoginId(e.target.value);
  }
  
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }

  const login = async (loginId, password) => {
    try {
        const { data: {statusCode, accessToken}} = await axios({
            method: 'post',
            url: apiPath.auth.login(),
            data: {
                loginId,
                password
            },
            withCredentials: true
        });
        if (statusCode === 200) {
            // dispatch(save({
            //     phone,
            //     accessToken
            // }));
            localStorage.setItem('token', accessToken);

            console.log('로그인 성공');
            return true;
        }

    } catch (e) {
        const { status } = e.response;
        if (status === 401 || status === 404)
            console.log('fail')
        
        else 
            console.log(status);
        return false;
    }
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
      <MPBtnBrd>회원가입</MPBtnBrd>
    </div>
  );
};


export default LoginForm;