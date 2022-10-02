
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import  './ProductSummary.css';
import LPBtn from './ui/LPBtn';
// import groom from '../assets/구름.jpg';
import MKBtn from './ui/MKBtn';

const ProductSummary = (props) => {
  const navigate = useNavigate();
  const name = useSelector((state) => state.user.name);
  const myRole = useSelector((state) => state.user.role);
  
  const nowPath = window.location.pathname.split('/')[1];
  let changeComponent = '';
  const price_component = myRole === "COMPANY" ? "product_price_seller" : "product_price";
  if (nowPath === 'purchaseContract' || nowPath === 'orderDetail') {
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

        <img src={props.tUrl} alt="" />
      </div>
        <div className='product_summary_de'>
          <div className='product_main'>

          <p className='product_title'>{props.title}</p>
          <p className='product_subtitle'>{props.subtitle}</p>
          <p className={price_component}>{props.price}원</p>
          </div>
          <div>
            <div className='product_mini'>

              <p className='product_label'>배송</p>
              <p className='product_content'>{props.period}</p>
          
            </div>
            <div className='product_mini'>

              <p className='product_label'>판매자</p>
              <p className='product_content'>{name}</p>
          
            </div>
            <div className='product_mini'>

              <p className='product_label'>판매단위</p>
              <p className='product_content'>{props.sales_unit}개</p>
          
            </div>
            <div className='product_mini'>

              <p className='product_label'>원산지</p>
              <p className='product_content'>{props.origin}</p>
          
            </div>
          <div className='product_mini_last'>

              <p className='product_label'>상품설명</p>
              <p className='product_content'>{props.descript}</p>
          
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