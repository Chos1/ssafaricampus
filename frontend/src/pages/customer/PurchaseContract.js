import { useEffect, useState } from "react";

import ProductSummary from "../../components/ProductSummary";
import RequestInfo from "../../components/PurchaseContract/RequestInfo";
import MPBtn from "../../components/ui/MPBtn";

import useEth from "../../contexts/EthContext/useEth";
import styles from "../ProductDetail.module.css";

import ModalBasic from "../../components/PurchaseContract/ModalBasic";

const PurchaseContract = () => {
  const {
    state: { contract, account },
  } = useEth();
  const [contractDetail, setContractDetail] = useState("");
  const contract_No = window.location.pathname.split("/")[2];

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    const getContractDetails = async () => {
      const contractDetail = await contract.methods.viewPurchaseContractByPurchaseNod(contract_No).call({ from: account });
      setContractDetail(contractDetail);
    };

    getContractDetails();
  }, [account, contract, contract_No]);
  console.log(contractDetail);
  return (
    <section className={styles.section}>
      <ProductSummary itemNo={contractDetail.item_No} />
      <RequestInfo contractDetail={contractDetail} />
      <MPBtn onClick={openModal}>결제하기</MPBtn>
      <ModalBasic open={modalOpen} close={closeModal} header="Modal heading" cont_pass={contractDetail.password} itemNo={contractDetail.item_No} contract_No={contract_No}></ModalBasic>
    </section>
  );
};

export default PurchaseContract;
