import styles from './BottomMainHeader.module.css'
const BottomMainHeader = () => {
  return (
      <div className={styles.justify_center}>
        <ul>
          <li>
            <a href="#">전체</a>
          </li>
          <li>
            <a href="#">오늘의 특가</a>
          </li>
          <li>
            <a href="#">추천 상품</a>
          </li>
          <li>
            <a href="#">아무튼 검색</a>
          </li>
        </ul> 
      </div>
  );
};

export default BottomMainHeader;