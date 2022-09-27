
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import  './ProductSummary.css';
import LPBtn from './ui/LPBtn';
import groom from '../assets/구름.jpg';
import MKBtn from './ui/MKBtn';

const ProductSummary = () => {
  const navigate = useNavigate();
  const myRole = useSelector((state) => state.user.role);
  
  const nowPath = window.location.pathname.split('/')[1];
  let changeComponent = '';

  const price_component = myRole === "COMPANY" ? "product_price_seller" : "product_price";



  if (nowPath === 'purchaseContract') {
    changeComponent = <div></div>
  }
  else if (nowPath === 'products' && myRole !== 'COMPANY') {
    changeComponent = <LPBtn 
      onClick={() => {
        navigate('/productRequest/:productId')
      }} 
      className='purchase_btn1'
    >
      구매하기
    </LPBtn>
  }
  else {
    changeComponent = <div>
        <MKBtn>등록하기</MKBtn>
        <MKBtn>삭제하기</MKBtn>
      </div>
  }

  // switch(nowPath) {
  //   case 'products':
  //     changeComponent = <LPBtn 
  //       onClick={() => {
  //         navigate('/productRequest/:productId')
  //       }} 
  //       className='purchase_btn1'
  //     >
  //       구매하기
  //     </LPBtn>
  //     break;
  
  //   case 'purchaseContract':
  //     changeComponent = <div></div>
  //     break;

  //   case 'productManage':
  //     changeComponent = 
  //     <div>
  //       <MKBtn>등록하기</MKBtn>
  //       <MKBtn>삭제하기</MKBtn>
  //     </div>
  //     break;

  //   default:
  //     break;
  // }

  return (
    <div className='product_summary_center'>
       <div className='product_summary'>
        <div>

        <img src={groom} alt="" />
      </div>
        <div className='product_summary_de'>
          <div className='product_main'>

          <p className='product_title'>충북대 과잠</p>
          <p className='product_subtitle'>아무튼 서브 이름</p>
          <p className={price_component}>12,900원</p>
          </div>
          <div>
            <div className='product_mini'>

              <p className='product_label'>배송</p>
              <p className='product_content'>꽤 금방</p>
          
            </div>
            <div className='product_mini'>

              <p className='product_label'>판매자</p>
              <p className='product_content'>유강현</p>
          
            </div>
            <div className='product_mini'>

              <p className='product_label'>판매단위</p>
              <p className='product_content'>1개</p>
          
            </div>
            <div className='product_mini'>

              <p className='product_label'>원산지</p>
              <p className='product_content'>상세페이지별도표기</p>
          
            </div>
          <div className='product_mini_last'>

              <p className='product_label'>상품설명</p>
              <p className='product_content'>충남대생 유강현이 판매하는 충북대 과잠입니다.충남대생 유강현이 판매하는 충북대 과잠입니다.</p>
          
          </div>
          
          </div>
          <br />
          <div  className='purchase_btn'>

          {changeComponent}
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductSummary;