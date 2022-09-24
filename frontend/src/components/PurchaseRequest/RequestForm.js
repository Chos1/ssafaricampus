import './RequestForm.css';
import MPBtn from '../../components/ui/MPBtn';
import SWBtnPBrd from '../ui/SWBtnPBrd';
const RequestForm = () => {
  return (
    
          
          <form className="request_inputgroup">

          <label for="">배송 주소</label>
          <input placeholder="배송 주소 입력해주세요" className='shipping_add'/>
          <SWBtnPBrd className="add_search">검색</SWBtnPBrd>
          <br/>
          <label for="">지갑 주소</label>
          <input placeholder="지갑 주소를 입력해주세요" />
          <br/>
          <label for="">총 인원</label>
          <input placeholder="총 인원을 입력해주세요"/>
          <br/>
          <label for="">첨부 파일</label>
          <input type="file" placeholder="총 인원을 입력해주세요" className='add_file'/>
          <br/>
          <label for="">비밀번호</label>
          <input placeholder="비밀번호를 입력해주세요"/>
          <br/> 
          <MPBtn>신청하기</MPBtn>
          </form>
      
  );
};

export default RequestForm;