import styles from "./ProductImage.module.css";
// import groom_2 from "../../assets/구름2.jpg";

const ProductImage = (props) => {
  return (
    <div className={styles.ProductImage}>
      <h1>상품 상세</h1>
      <img src={props.dUrl} alt="" className={styles.ProductImg} />
    </div>
  );
};

export default ProductImage;
