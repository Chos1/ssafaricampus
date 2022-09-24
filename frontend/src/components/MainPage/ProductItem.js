import './ProductItem.css';
import { useNavigate } from 'react-router-dom';

const ProductItem = () =>{
  const navigate = useNavigate();

  return(
    <div>
      <div className="card">
            <div className="card-top">
              <img onClick={() => { navigate('') }} src="{item.img_link}" alt="상품사진" />
              <h1>상품 제목</h1>
            </div>
            <div className="card-bottom">
              <h3>가격</h3>
              <p>한줄 설명</p>
            </div>
          </div>
      {/* <div className="card">
            <div className="card-top">
              <img src="{item.img_link}" alt="{item.title}" />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <p>{item.한줄 설명}</p>
            </div>
          </div> */}
    </div>
  );
}

export default ProductItem;