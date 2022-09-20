import './SignUp.css';
const SignUpSeller = () => {
  return (
    <div className="container">
          <h1 >Seller</h1>
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
              <label for="">업체명</label>
              <input placeholder="업체명을 입력해주세요"/>
              <br/>
              <label for="">사업체 등록번호</label>
              <input placeholder="사업체 등록번호을 입력해주세요"/>
              <button className='SWBtnPBrd'>사업자 인증</button>
              <br/>
              <label for="">전화번호</label>
              <input placeholder="숫자만 입력해주세요"/>
              <br/>
            </div>
       
          <button type="submit" className='MPBtn'>가입하기</button>
      </div>
  );
};

export default SignUpSeller;