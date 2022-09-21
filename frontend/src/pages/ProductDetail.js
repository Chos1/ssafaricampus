import { useParams } from 'react-router-dom';
import styles from './ProductDetail.module.css';

import ProductSummary from '../components/ProductSummary';
import LPBtn from '../components/ui/LPBtn';

const ProductDetail = () => {
  // url parameter 사용
  const params = useParams();
  console.log(params.productId);

  return (
    <section className={styles.section}>
      <ProductSummary />
      <div>
        <p>상품 설명 이미지</p>
      </div>
      <div>
        <LPBtn>구매하기</LPBtn>
      </div>
    </section>
  );
};

export default ProductDetail;