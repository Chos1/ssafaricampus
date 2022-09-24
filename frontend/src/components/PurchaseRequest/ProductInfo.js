import './ProductInfo.css';
import groom from '../../assets/구름.jpg'
const ProductInfo = (props) => {
 const title = '충북대 과잠'
 const subtitle = '아무튼 서브 이름'
 const price = '12,900원'
  return (
      <div className='info_card'>
        <div className='productinfo_item'>

        <img src={groom} alt="" />
        <div className='productinfo_item_title'>
          <h3>{title}</h3>

          <h4>{subtitle}</h4>
        </div>
        <div className='productinfo_item_price'>
          <h3>{price}</h3>
        </div>
        </div>
      </div>
  );
};

export default ProductInfo;