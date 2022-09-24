import PurchaseItem from "./PurchaseItem";
import styles from './PurchaseList.module.css';

const PurchaseList = () => {
  const tests = [['충북대 과잠','아무튼 서브 이름','12,900'],['충남대 과잠','아무튼 서브 이름','13,900']]
  const purchaseItem = tests.map((test) => (<PurchaseItem title={test[0]} subtitle={test[1]} price={test[2]}/>))
  return (
    <div className={styles.container_purchaseList}>
      <div>
        <h1>구매 리스트</h1>
        <hr />
      </div>
      {purchaseItem}
      {/* <PurchaseItem title={props.title} subtitle={props.subtitle} price={props.subtitle}/> */}
    </div>
  );
};

export default PurchaseList;
