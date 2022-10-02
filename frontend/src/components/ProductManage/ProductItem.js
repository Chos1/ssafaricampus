import { useNavigate } from "react-router-dom";
import useEth from "../../contexts/EthContext/useEth";
import styles from "./ProductItem.module.css";
import { useEffect, useState } from "react";

const ProductItem = (props) => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const {
    state: { contract, account },
  } = useEth();

  useEffect(() => {
    const readItem = async () => {
      console.log("전송시작");
      const item = await contract.methods.readItem(account).call({ from: account });
      console.log(item.detail);
      setUrl(item.detail);
      console.log("전송끝");
    };
    readItem();
  }, [account, contract]);

  return (
    <div
      className={styles.ProductItem}
      onClick={() => {
        navigate("/orderDetail/:orderId");
      }}
    >
      <div className={styles.card}>
        <div className={styles.card_top}>
          {/* <img src={url} alt="상품사진" /> */}
          <img src="https://dimg.donga.com/ugc/CDB/WOMAN/Article/62/aa/bd/43/62aabd4312a1d2738250.jpg" alt={url} />
        </div>
        <div className={styles.card_bottom}>
          <h1>{props.title}</h1>
          <h3>{props.price}</h3>
        </div>
      </div>
      {/* <div className="card">
          <div className="card-top">
            <img src="{item.img_link}" alt="{item.title}" />
            <h1>{item.title}</h1>
          </div>
          <div className="card-bottom">
            <h3>{item.price}</h3>
            <p>{item.한줄 설명}</p>
          </div>
        </div> */}
    </div>
  );
};

export default ProductItem;
