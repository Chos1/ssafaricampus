import { useEffect, useState } from "react";

import ProductSummary from "../../components/ProductSummary";
import RequestInfo from "../../components/PurchaseContract/RequestInfo";
import MPBtn from "../../components/ui/MPBtn";

import useEth from "../../contexts/EthContext/useEth";
import styles from "../ProductDetail.module.css";

const PurchaseContract = () => {
  const {
    state: { contract, account },
  } = useEth();
  const [contractDetail, setContractDetail] = useState("");
  const contract_No = window.location.pathname.split("/")[2];

  useEffect(() => {
    const getContractDetails = async () => {
      const contractDetail = await contract.methods
        .viewPurchaseContractByPurchaseNod(contract_No)
        .call({ from: account });
      setContractDetail(contractDetail);
    };

    getContractDetails();
  }, [account, contract, contract_No]);
  return (
    <section className={styles.section}>
      <ProductSummary itemNo={contractDetail.item_No} />
      <RequestInfo contractDetail={contractDetail} />
      <MPBtn>결제하기</MPBtn>
    </section>
  );
};

export default PurchaseContract;
