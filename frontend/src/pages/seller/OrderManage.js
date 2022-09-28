import UserInfo from '../../components/UserInfo/UserInfo'
import Notion from '../../components/UserInfo/Notion'
import PurchaseList from '../../components/UserInfo/PurchaseList';

import styles from '../customer/Mypage.module.css'

/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Web3 from "web3";
// import { CONTACT_ABI, CONTACT_ADDRESS } from "../customer/config";
import { useSelector } from 'react-redux';

function OrderManage() {
  const [account, setAccount] = useState();
  const [contactList, setContactList] = useState();
  const [contacts, setContacts] = useState([]);
  
  const name = useSelector((state) => state.user.name);
  const loginId = useSelector((state) => state.user.loginId);
  const email = useSelector((state) => state.user.email);
  const phone = useSelector((state) => state.user.phone);
  const role = useSelector((state) => state.user.role);
  const companyNumber = useSelector((state) => state.user.companyNumber);

  const [isWallet, setIsWallet] = useState(true);
  const item = isWallet ? <PurchaseList /> : <Notion role={role}/>;

  useEffect(() => {
    async function load() {
      const web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/7885ac55f47f453488027010d12acadb"));

      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      // Instantiate smart contract using ABI and address.
      // const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
      // set contact list to state variable.
      setContactList(contactList);
      // Then we get total number of contacts for iteration
      const counter = await contactList.methods.count().call();
      // iterate through the amount of time of counter
      for (var i = 1; i <= counter; i++) {
        // call the contacts method to get that particular contact from smart contract
        const contact = await contactList.methods.contacts(i).call();
        // add recently fetched contact to state variable.
        setContacts((contacts) => [...contacts, contact]);
      }
    }

    load();
  }, []);

  
  return (
    <div className={styles.mypage}>
      <UserInfo name={name} loginId={loginId} email={email} phone={phone} role={role} isWallet={isWallet} companyNumber={companyNumber}/>
      <button value={isWallet} onClick={() => {setIsWallet(!isWallet)}}>change wallet state</button>
      {item}
    </div>
  );
}

export default OrderManage;
