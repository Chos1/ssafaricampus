import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";
import MKBtn from "../ui/MKBtn";
import useEth from "../../contexts/EthContext/useEth";
const ProductList = () => {
  const {
    state: { contract, account },
  } = useEth();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();

  const [tUrl, setTurl] = useState("");
  const [dUrl, setDurl] = useState("");
  const [itemNo, setitemNo] = useState("");

  const navigate = useNavigate();
  const goods = [
    [title, price, tUrl, dUrl, itemNo],
    ["제품1", "20000"],
    ["제품3", "30000"],
    ["제품4", "40000"],
  ];
  const goodsList = goods.map((good, idx) => <ProductItem key={idx} title={good[0]} price={good[1]} tUrl={good[2]} dUrl={good[3]} itemNo={good[4]} />);

  useEffect(() => {
    const displayItem = async () => {
      const item = await contract.methods.viewSellerToItem(account).call({ from: account });
      console.log(item);
      setTitle(item[1]);
      setPrice(item[3]);
      setTurl(item[5]);
      setDurl(item[6]);
      setitemNo(item[0])
    };
    displayItem();
  }, [account, contract]);

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
      {/* 페이지네이션 */}
    </div>
  );
};

export default ProductList;
