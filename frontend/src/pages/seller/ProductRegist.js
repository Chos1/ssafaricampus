import ProductForm from '../../components/ProductForm';
import MKBtn from '../../components/ui/MKBtn';
const ProductRegist = () => {
    return (
        <div className='container'>
            <h1>상품 등록</h1>
            <hr />
            <ProductForm/> 
            <MKBtn >등록하기</MKBtn>
        </div>
    );
};

export default ProductRegist;