
import ProductSummary from '../../components/ProductSummary';
import RequestInfo from '../../components/PurchaseContract/RequestInfo';
import MPBtn from '../../components/ui/MPBtn';

const PurchaseContract = () => {
    console.log(window.location.pathname);

    return (
        <div>
            <ProductSummary />
            <RequestInfo />
            <MPBtn>결제하기</MPBtn>
        </div>
    );
};

export default PurchaseContract;