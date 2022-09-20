import { useParams } from 'react-router-dom';

import ProductSummary from '../components/ProductSummary';

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      {/* <h1>Product Detail</h1>
      <p>{params.productId}</p> */}
      <ProductSummary />
    </section>
  );
};

export default ProductDetail;