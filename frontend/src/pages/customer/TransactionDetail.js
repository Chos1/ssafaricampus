import TransactionList from '../../components/TransactionDetail/TransactionList';

import styles from './TransactionDetail.module.css'

const TransactionDetail = () => {
    return (
        <div className={styles.TransactionDetail}>
            <h1>거래 내역</h1>
            <hr />
            <TransactionList />
        </div>
    );
};

export default TransactionDetail;