import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import apiPath from '../../api/apiPath';

import MPBtn from '../ui/MPBtn';
import SWBtnPBrd from '../ui/SWBtnPBrd';
import './SignUpForm.css';

const CustomerForm = () => {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  async function signUp(loginId, password, name, email, phone) {
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(apiPath.user.customer(), {
      method: 'POST',
      body: JSON.stringify({
        'loginId': loginId,
        'password': password,
        'name': name,
        'email': email,
        'phone': phone,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // const data = await response.json();
    navigate('/login');
  }

  const signUpHandler = (e) => {
    e.preventDefault();
    signUp(loginId, password, name, email, phone);
    setLoginId('');
    setPassword('');
    setPasswordCheck('');
    setName('');
    setEmail('');
    setPhone('');
  }

  const loginIdChangeHandler = (e) => {
    setLoginId(e.target.value);
  }
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }
  const passwordCheckChangeHandler = (e) => {
    setPasswordCheck(e.target.value);
  }
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  }
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  }
  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  }

  return (
      <div>
        <form onSubmit={signUpHandler}>
          <div className="inputgroup">
              <label>아이디</label>
              <input type='text' value={loginId} onChange={loginIdChangeHandler} placeholder="아이디를 입력해주세요"/>
              <br/>
              <label>비밀번호</label>
              <input type='password' value={password} onChange={passwordChangeHandler} placeholder="비밀번호를 입력해주세요"/>
              <br/>
              <label>비밀번호 확인</label>
              <input type="password" value={passwordCheck} onChange={passwordCheckChangeHandler}  placeholder="비밀번호를 한번 더 입력해주세요"/>
              <br/>
              <label>이름</label>
              <input type='text' value={name} onChange={nameChangeHandler} placeholder="이름을 입력해주세요"/>
              <br/>
              <label>학교 이메일</label>
              <input type='email' value={email} onChange={emailChangeHandler} placeholder="학교 이메일을 입력해주세요"/>
              <SWBtnPBrd>이메일 인증</SWBtnPBrd>
              <br/>
              <label>전화번호</label>
              <input value={phone} onChange={phoneChangeHandler} placeholder="숫자만 입력해주세요"/>
              <br/>
            </div>
       
            <MPBtn type='submit' onClick={signUpHandler}>가입하기</MPBtn>
        </form>
      </div>
  );
};

export default CustomerForm;