// import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './ProductDetail.module.css';

import ProductSummary from '../components/ProductSummary';
import ProductImage from '../components/ProductDetail/ProductImage';
import LPBtn from '../components/ui/LPBtn';

const ProductDetail = () => {
  // url parameter 사용
  // const params = useParams();
  
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <ProductSummary />
      <ProductImage />
      <div>
        <LPBtn onClick={() => {navigate('/productRequest/:productId')}}>구매하기</LPBtn>
      </div>
    </section>
  );
};

export default ProductDetail;