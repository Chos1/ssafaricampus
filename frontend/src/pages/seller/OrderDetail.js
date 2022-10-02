import ProductSummary from '../../components/ProductSummary';
import Detail from '../../components/OrderDetail/Detail';
import styles from '../ProductDetail.module.css'
import useEth from "../../contexts/EthContext/useEth";

import { useEffect, useState} from "react";
import { useLocation } from 'react-router-dom'

const OrderDetail = () => {
    const location = useLocation();

    const {
        state: { contract,account },
      } = useEth();
      const itemNo_param = location.state.itemNo;
    
      const [title, setTitle] = useState();
      const [subtitle, setSubtitle] = useState();
      const [price, setPrice] = useState();
      const [category, setCategory] = useState();
      const [tUrl, setTurl] = useState("");
      const [dUrl, setDurl] = useState("");
      const [itemNo, setItemNo] = useState("");
      const [descript, setDescript] = useState("");
      const [origin, setOrigin] = useState("");
      const [sales_unit, setSales_unit] = useState();
      const [period, setPeriod] = useState("");

      useEffect(() => {
        const displayItem = async () => {
          const item = await contract.methods.viewItemByItemNo(itemNo_param).call({ from: account });
          console.log(item);
          setItemNo(item[0]);
          setTitle(item[1]);
          setSubtitle(item[2]);
          setCategory(item[4]);
          setDescript(item[10]);
          setOrigin(item[9]);
          setSales_unit(item[8]);
          setPeriod(item[7]);
          setPrice(item[3]);
          setTurl(item[5]);
          setDurl(item[6]);

        };
        displayItem();
      }, [account, contract, itemNo_param]);
    return (
        <section className={styles.section}>
           <ProductSummary 
           itemNo = {itemNo}
           title = {title}
           subtitle = {subtitle}
           category = {category}
           descript = {descript}
           origin = {origin}
           sales_unit = {sales_unit}
           period = {period}
           price = {price}
           tUrl = {tUrl}
           dUrl = {dUrl}
           />
           <Detail/>
        </section>
    );
};

export default OrderDetail;