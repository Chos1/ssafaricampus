import ProductSummary from '../../components/ProductSummary';
import Detail from '../../components/OrderDetail/Detail';
import styles from '../ProductDetail.module.css'
const OrderDetail = () => {
    return (
        <section className={styles.section}>
           <ProductSummary />
           <Detail/>
        </section>
    );
};

export default OrderDetail;