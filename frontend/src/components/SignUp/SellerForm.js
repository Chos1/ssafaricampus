import MPBtn from '../ui/MPBtn';
import SWBtnPBrd from '../ui/SWBtnPBrd';
import './SignUp.css';
const SellerForm = () => {
  return (
      <div>
          
          <div className="inputgroup">
              <label for="">아이디</label>
              <input placeholder="아이디를 입력해주세요"/>
              <br/>
              <label for="">비밀번호</label>
              <input type="password" placeholder="비밀번호를 입력해주세요"/>
              <br/>
              <label for="">비밀번호 확인</label>
              <input type="password" placeholder="비밀번호를 한번 더 입력해주세요"/>
              <br/>
              <label for="">업체명</label>
              <input placeholder="업체명을 입력해주세요"/>
              <br/>
              <label for="">사업체 등록번호</label>
              <input placeholder="사업체 등록번호을 입력해주세요"/>
              <SWBtnPBrd>사업자 인증</SWBtnPBrd>
              <br/>
              <label for="">전화번호</label>
              <input placeholder="숫자만 입력해주세요"/>
              <br/>
            </div>
       <MPBtn>가입하기</MPBtn>
      </div>
  );
};

export default SellerForm;