import TopMainHeader from "./TopMainHeader.js";
import BottomMainHeader from "./BottomMainHeader";
import SellerTopMainHeader from "./SellerTopMainHeader.js";
import SellerBottomMainHeader from "./SellerBottomMainHeader";

import { useSelector } from "react-redux";

import styles from "./MainHeader.module.css";

const MainHeader = () => {
  const role = useSelector((state) => state.user.role);
  const TopHeader = role === "COMPANY" ? <SellerTopMainHeader /> : <TopMainHeader />;
  const BottomHeader = role === "COMPANY" ? <SellerBottomMainHeader /> : <BottomMainHeader />;
  const HeaderSize = role === "COMPANY" ? styles.HeaderCompany : styles.header;
  if (window.location.pathname === "/firstmain") return null;
  return (
    <header className={HeaderSize}>
      <nav>
        {TopHeader}
        {BottomHeader}
      </nav>
      <hr />
    </header>
  );
};

export default MainHeader;
