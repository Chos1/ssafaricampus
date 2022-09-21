
import styles from './ProductSummary.module.css';

const ProductSummary = () => {
  return (
      <div className={styles.summary}>
        <div>
          <p>상품 이미지</p>
        </div>
        <div>
          <p className={styles.name}>충북대 과잠</p>
          <p>아무튼 서브 이름</p>
          <p>12,900원</p>
          <div>
            <table>
              <tr>
                <td>배송</td>
                <td>꽤 금방</td>
              </tr>
              <tr>
                <td>판매자</td>
                <td>유강현</td>
              </tr>
              <tr>
                <td>판매단위</td>
                <td>1개</td>
              </tr>
              <tr>
                <td>원산지</td>
                <td>상세페이지 별도 표기</td>
              </tr>
              <tr>
                <td>상품설명</td>
                <td>충남대생 유강현이 판매하는 충북대 과잠입니다.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
  );
};

export default ProductSummary;