import styles from './ProductItem.module.css';
import { useNavigate } from 'react-router-dom';

const ProductItem = () =>{
  const navigate = useNavigate();

  return(
    <div className={styles.product_item}>
      <div className={styles.card}>
            <div className={styles.card_top}>
              <img src="https://www.busan.com/nas/wcms/wcms_data/photos/2022/06/14/2022061410260748570_m.jpg"onClick={() => { navigate('') }} alt="상품사진" />
            </div>
            <div className={styles.card_bottom}>
              <h1>상품 제목</h1>
              <h3>가격</h3>
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