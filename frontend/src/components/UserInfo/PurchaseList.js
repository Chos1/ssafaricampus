// components
import PurchaseItem from "./PurchaseItem";
// css
import styles from "./css/PurchaseList.module.css";
import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

const PurchaseList = (props) => {
  const {
    state: { contract, account },
  } = useEth();
  const [purchase, setPurchase] = useState([]);
  const [buyItems, setBuyItems] = useState([]);
  const [contracts, setContracts] = useState([]);
  useEffect(() => {
    const getPurchases = async () => {
      let myPaidContract = [];
      const paidContract = await contract.methods.viewPaidContract().call({ from: account });
      for (let i = 0; i < paidContract.length; i++) {
        if (parseInt(paidContract[i].paid_address) === parseInt(account)) {
          myPaidContract.push(paidContract[i]);
        }
      }
      setPurchase(myPaidContract);
    };
    getPurchases();
    const getBuyItems = async () => {
      const allItems = await contract.methods.viewItems().call({ from: account });
      setBuyItems(allItems);
    };
    getBuyItems();

    const getConracts = async () => {
      const contracts = await contract.methods.viewPurchaseContract().call({ from: account });
      setContracts(contracts);
    };
    getConracts();
  }, [account, contract]);

  let myItems = [];
  let myContracts = [];

  for (let i = 0; i < purchase.length; i++) {
    for (let j = 0; j < buyItems.length; j++) {
      if (purchase[i].item_No === buyItems[j].item_No) {
        myItems.push(buyItems[j]);
      }
    }
  }
  for (let i = 0; i < purchase.length; i++) {
    for (let j = 0; j < contracts.length; j++) {
      if (purchase[i].purchase_No === contracts[j].purchase_No) {
        myContracts.push(contracts[j]);
      }
    }
  }
  const purchaseItem = myItems.map((myItem, idx) => <PurchaseItem key={idx} item={myItem} cont={myContracts[idx]} account={account} />);

  let ListTitle = "";
  if (props.role === "COMPANY") {
    ListTitle = <h1>구매 리스트</h1>;
  } else {
    ListTitle = <h1>주문 리스트</h1>;
  }
  return (
    <div className={styles.container_purchaseList}>
      <div>
        {ListTitle}
        <hr />
      </div>
      {/* <PurchaseItem title={props.title} subtitle={props.subtitle} price={props.subtitle}/> */}
      {purchaseItem}
    </div>
  );
};

export default PurchaseList;
