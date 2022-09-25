
import ProductSummary from '../../components/ProductSummary';
import RequestInfo from '../../components/PurchaseContract/RequestInfo';
import MPBtn from '../../components/ui/MPBtn';

import styles from '../ProductDetail.module.css'

const PurchaseContract = () => {
    console.log(window.location.pathname);

    return (
        <section className={styles.section}>
            <ProductSummary />
            <RequestInfo />
            <MPBtn>결제하기</MPBtn>
        </section>
    );
};

export default PurchaseContract;