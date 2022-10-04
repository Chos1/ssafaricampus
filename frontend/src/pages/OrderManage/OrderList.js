// packages
import { useEffect, useState } from "react";
// utils
import useEth from "../../contexts/EthContext/useEth";
// components
import OrderItem from "./OrderItem";
// css
import styles from "./css/OrderList.module.css";

const OrderList = (props) => {
  const {
    state: { contract, account },
  } = useEth();
  const [contractDetails, setContractDetails] = useState("");

  useEffect(() => {
    const getContractDetails = async () => {
      const contractList = [];
      let contractItem = [];
      const contractDetails = await contract.methods
        .viewPurchaseContract()
        .call({ from: account });
      let nowItem = "";
      console.log(contractDetails);
      contractItem.push();
      for (let i = 0; i < contractDetails.length; i++) {
        nowItem = await contract.methods
          .viewItemByItemNo(contractDetails[i].item_No)
          .call({ from: account });
        console.log(nowItem);
        contractItem.push(nowItem[1], nowItem[2]);
        console.log(contractItem);
      }
      setContractDetails(contractDetails);
    };
    getContractDetails();
  }, [account, contract]);

  console.log(contractDetails);

  // const orderItem = contractDetails.map((test, idx) => (
  //   <OrderItem key={idx} title={test[0]} subtitle={test[1]} price={test[2]} />
  // ));

  let ListTitle = "";
  if (props.role === "COMPANY") {
    ListTitle = <h1>구매 리스트</h1>;
  } else {
    ListTitle = <h1>주문 리스트</h1>;
  }
  return (
    <div className={styles.container_orderList}>
      <div>
        {ListTitle}
        <hr />
      </div>
      {/* {orderItem} */}
    </div>
  );
};

export default OrderList;
