import ProductForm from '../../components/ProductForm';
import MKBtn from '../../components/ui/MKBtn';
const ProductModify = () => {
    return (
        <div className='container'>
        <h1>상품 수정</h1>
        <hr />
        <ProductForm/> 
        <MKBtn >수정하기</MKBtn>
    </div>
    );
};

export default ProductModify;