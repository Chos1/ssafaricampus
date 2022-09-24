import ProductInfo from '../../components/PurchaseRequest/ProductInfo';
import RequestForm from '../../components/PurchaseRequest/RequestForm';

const PurchaseRequest = () => {
    return (
        <div className='container'>
            <h1>구매 신청</h1>
            <hr />
            <ProductInfo className="card_center"/> 
            <RequestForm/>
            
        </div>
    );
};

export default PurchaseRequest;