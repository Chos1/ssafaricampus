import styles from "./MainFooter.module.css";

const MainFooter = () => {
  if (window.location.pathname === "/firstmain") return null;
  return (
    <footer className={styles.footer}>
      <p>Copyright 2022. Rotiple All pictures can not be copied without permission</p>
    </footer>
  );
};

export default MainFooter;
