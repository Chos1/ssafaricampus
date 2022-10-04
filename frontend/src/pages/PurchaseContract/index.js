// packages
import { useEffect, useState } from "react";
// utils
import useEth from "../../contexts/EthContext/useEth";
// components
import ModalBasic from "./ModalBasic";
import RequestInfo from "./RequestInfo";
import ProductSummary from "../../components/ProductSummary/ProductSummary";
// css
import styles from "./css/index.module.css";
import MPBtn from "../../components/ui/MPBtn";

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

  const fetchConfirmContract = async () => {
    const resulttest = await contract.methods.confirmContract(contract_No).send({ from: account, gas: 20000000, value: 0 });
    console.log(resulttest);
    console.log(contractDetail);
  };

  useEffect(() => {
    const getContractDetails = async () => {
      const contractDetail = await contract.methods.viewPurchaseContractByPurchaseNod(contract_No).call({ from: account });
      setContractDetail(contractDetail);
    };

    getContractDetails();
  }, [account, contract, contract_No]);
  console.log(contractDetail);

  let Btn = <></>;

  if (contractDetail.paid_people >= contractDetail.total_people) {
    if (parseInt(contractDetail.purchase_address) === parseInt(account)) {
      Btn = <MPBtn onClick={fetchConfirmContract}>결제 확정하기 </MPBtn>;
    }
  } else {
    Btn = (
      <MPBtn onClick={openModal}>
        {contractDetail.paid_people}/{contractDetail.total_people}
      </MPBtn>
    );
  }

  return (
    <section className={styles.section}>
      <ProductSummary itemNo={contractDetail.item_No} />
      <RequestInfo contractDetail={contractDetail} />
      {Btn}
      <ModalBasic open={modalOpen} close={closeModal} header="Modal heading" cont_pass={contractDetail.password} itemNo={contractDetail.item_No} contract_No={contract_No}></ModalBasic>
    </section>
  );
};

export default PurchaseContract;
