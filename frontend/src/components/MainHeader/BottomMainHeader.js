import styles from './BottomMainHeader.module.css'
const BottomMainHeader = () => {
  return (
      <div className={styles.justify_center}>
        <p>전체</p>
        <ul>
          <li>
            메뉴 1
          </li>
          <li>
            메뉴 2 
          </li>
        </ul> 
      </div>
  );
};

export default BottomMainHeader;