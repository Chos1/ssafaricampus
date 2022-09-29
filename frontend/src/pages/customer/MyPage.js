/* eslint-disable no-unused-vars */
import { useState } from "react";
// import Web3 from "web3";
// import { CONTACT_ABI, CONTACT_ADDRESS } from "./config";
import { useSelector } from "react-redux";

// import Demo from "../../components/Demo";
import UserInfo from "../../components/UserInfo/UserInfo";
import Notion from "../../components/UserInfo/Notion";
import PurchaseList from "../../components/UserInfo/PurchaseList";

import styles from "./Mypage.module.css";
import useEth from "../../contexts/EthContext/useEth";
// import EthProvider from "../../contexts/EthContext/EthProvider";
function Mypage() {
  const name = useSelector((state) => state.user.name);
  const loginId = useSelector((state) => state.user.loginId);
  const email = useSelector((state) => state.user.email);
  const phone = useSelector((state) => state.user.phone);
  const role = useSelector((state) => state.user.role);
  const companyNumber = useSelector((state) => state.user.companyNumber);

  const { state } = useEth();
  const item = state.account !== null ? <PurchaseList /> : <Notion role={role} />;

  return (
    <div className={styles.mypage}>
      <UserInfo name={name} loginId={loginId} email={email} phone={phone} role={role} companyNumber={companyNumber} />
      {item}
      {/* <EthProvider contract="SimpleStorage">
        <Demo />
      </EthProvider> */}
    </div>
  );
}

export default Mypage;
