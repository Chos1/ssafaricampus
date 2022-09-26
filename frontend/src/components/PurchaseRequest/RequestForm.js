import { useNavigate } from 'react-router-dom';

import './RequestForm.css';
import MPBtn from '../../components/ui/MPBtn';
import SWBtnPBrd from '../ui/SWBtnPBrd';
const RequestForm = () => {
  const navigate = useNavigate();

  return (
    
          
          <form className="request_inputgroup">

          <label>배송 주소</label>
          <input placeholder="배송 주소 입력해주세요" className='shipping_add'/>
          <SWBtnPBrd className="add_search">검색</SWBtnPBrd>
          <br/>
          <label>지갑 주소</label>
          <input placeholder="지갑 주소를 입력해주세요" />
          <br/>
          <label>총 인원</label>
          <input placeholder="총 인원을 입력해주세요"/>
          <br/>
          <label>첨부 파일</label>
          <input type="file" placeholder="총 인원을 입력해주세요" className='add_file'/>
          <br/>
          <label>비밀번호</label>
          <input placeholder="비밀번호를 입력해주세요"/>
          <br/> 
          <MPBtn onClick={() => {navigate('/purchaseContract/:transactionId')}}>신청하기</MPBtn>
          </form>
      
  );
};

export default RequestForm;