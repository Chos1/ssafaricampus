// packages
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// utils
import useEth from "../../contexts/EthContext/useEth";
// components
import ProductItem from "./ProductItem";
// css
import styles from "./css/ProductList.module.css";
import MKBtn from "../../components/ui/MKBtn";
const ProductList = () => {
  const {
    state: { contract, account },
  } = useEth();
  const [goods, setGoods] = useState([]);

  const navigate = useNavigate();
  const goodsList =
    goods.length > 0 ? (
      goods.map((good, idx) => <ProductItem key={idx} good={good} />)
    ) : (
      <p>등록한 상품이 없습니다</p>
    );

  useEffect(() => {
    const displayItems = async () => {
      const items = await contract.methods.viewItems().call({ from: account });
      const itemArray = [];
      for (let i = 0; i < items.length; i++) {
        const seller = parseInt(items[i].seller_address, 16);
        if (seller === parseInt(account, 16)) {
          itemArray.push(items[i]);
        }
      }
      setGoods(itemArray);
    };
    displayItems();
  }, [account, contract, goods]);

  return (
    <div className={styles.ProductList_container}>
      <div className={styles.buttonright}>
        <MKBtn
          onClick={() => {
            navigate("/productRegist");
          }}
        >
          상품 등록
        </MKBtn>
      </div>
      <div className={styles.gridList}>{goodsList}</div>
    </div>
  );
};

export default ProductList;
