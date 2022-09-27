import './Detail.css'
const Detail = () => {
  return (
    <div className="detail_info">
    <div>
      <div className='detail_item'>

        <p className='detail_label'>구매자</p>
        <p className='detail_content'>김진하</p>

      </div>
      <div className='detail_item'>

        <p className='detail_label'>배송지</p>
        <p className='detail_content'>대전 광역시 어딘가 어느 건물 근처 거기</p>

      </div>
      <div className='detail_item'>

        <p className='detail_label'>지갑 주소</p>
        <p className='detail_content'>0x2C9908F99f1a5195195dk2i3o2o1</p>

      </div>
      <div className='detail_item'>

        <p className='detail_label'>총 인원</p>
        <p className='detail_content'>120명</p>

      </div>
      <div className='detail_item'>

        <p className='detail_label'>총 가격</p>
        <p className='detail_content'>1,548,000원</p>

      </div>
      <div className='detail_item'>

        <p className='detail_label'>결제 상태</p>
        <p className='detail_content'>결제 완료</p>

      </div>
      <div className='detail_item'>

        <p className='detail_label'>첨부 파일</p>
        <p className='detail_content'>세종대학교_실음과_과잠_사이즈_명단.xlsx</p>

      </div>
    </div>
    </div>
  );
};

export default Detail;