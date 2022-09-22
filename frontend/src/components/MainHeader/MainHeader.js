import TopMainHeader from './TopMainHeader.js'
import BottomMainHeader from './BottomMainHeader'


import styles from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <TopMainHeader />
        <BottomMainHeader />
      </nav>
    </header>
  );
};

export default MainHeader;