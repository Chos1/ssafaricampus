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
  const tests = [
    ["충북대 과잠", "아무튼 서브 이름", "12,900"],
    ["충남대 과잠", "아무튼 서브 이름", "13,900"],
  ];

  useEffect(() => {
    const getContractDetails = async () => {
      const contractDetails = await contract.methods
        .viewPurchaseContract()
        .call({ from: account });
      setContractDetails(contractDetails);
    };
    getContractDetails();
  }, [account, contract]);
  console.log(contractDetails);

  const orderItem = tests.map((test, idx) => (
    <OrderItem key={idx} title={test[0]} subtitle={test[1]} price={test[2]} />
  ));

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
      {orderItem}
    </div>
  );
};

export default OrderList;
