import styles from './BottomMainHeader.module.css'
const BottomMainHeader = () => {
  return (
      <div className={styles.justify_center}>
        <ul>
          <li>
            전체
          </li>
          <li>
            오늘의 특가
          </li>
          <li>
            추천 상품
          </li>
          <li>
            아무튼 검색
          </li>
        </ul> 
      </div>
  );
};

export default BottomMainHeader;