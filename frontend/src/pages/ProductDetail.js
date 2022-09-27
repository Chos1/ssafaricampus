import { useNavigate } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import { useSelector } from 'react-redux';

import ProductSummary from '../components/ProductSummary';
import ProductImage from '../components/ProductDetail/ProductImage';
import LPBtn from '../components/ui/LPBtn';

const ProductDetail = () => {
  const myRole = useSelector((state) => state.user.role);
  let changeComponent = ''

  const navigate = useNavigate();
  if (myRole === "COMPANY") {
    changeComponent = <div></div>
  }
  else {
    changeComponent = 
    <div>
      <LPBtn onClick={() => {navigate('/productRequest/:productId')}}>구매하기</LPBtn>
    </div>
  }
  return (
    <section className={styles.section}>
      <ProductSummary />
      <ProductImage />
      {changeComponent}
    </section>
  );
};

export default ProductDetail;