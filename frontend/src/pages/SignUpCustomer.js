import React from 'react';
import './SignUp.css';
const SignUpCustomer = () => {
  return (
      <div className="container">
          <h1 >Customer</h1>
          <hr/>
          <div className="inputgroup">
              <label for="">아이디</label>
              <input placeholder="아이디를 입력해주세요"/>
              <br/>
              <label for="">비밀번호</label>
              <input placeholder="비밀번호를 입력해주세요"/>
              <br/>
              <label for="">비밀번호 확인</label>
              <input placeholder="비밀번호를 한번 더 입력해주세요"/>
              <br/>
              <label for="">이름</label>
              <input placeholder="이름을 입력해주세요"/>
              <br/>
              <label for="">학교 이메일</label>
              <input placeholder="학교 이메일을 입력해주세요"/>
              <button className='SWBtnPBrd'>이메일 인증</button>
              <br/>
              <label for="">전화번호</label>
              <input placeholder="숫자만 입력해주세요"/>
              <br/>
            </div>
       
          <button type="submit" className='MPBtn'>가입하기</button>
      </div>
  );
};

export default SignUpCustomer;