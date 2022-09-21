import MPBtn from '../ui/MPBtn';
import SWBtnPBrd from '../ui/SWBtnPBrd';
import './SignUp.css';
const CustomerForm = () => {
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
              <label for="">이름</label>
              <input placeholder="이름을 입력해주세요"/>
              <br/>
              <label for="">학교 이메일</label>
              <input type="email" placeholder="학교 이메일을 입력해주세요"/>
              <SWBtnPBrd>이메일 인증</SWBtnPBrd>
              <br/>
              <label for="">전화번호</label>
              <input placeholder="숫자만 입력해주세요"/>
              <br/>
            </div>
       
            <MPBtn>가입하기</MPBtn>
      </div>
  );
};

export default CustomerForm;