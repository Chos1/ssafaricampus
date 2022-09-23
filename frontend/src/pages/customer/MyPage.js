import UserInfo from '../../components/UserInfo/UserInfo'
import Notion from '../../components/UserInfo/Notion'

import styles from './Mypage.module.css'

/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Web3 from "web3";
import { CONTACT_ABI, CONTACT_ADDRESS } from "./config";

function Mypage() {
  const [account, setAccount] = useState();
  const [contactList, setContactList] = useState();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function load() {
      const web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/7885ac55f47f453488027010d12acadb"));

      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      // Instantiate smart contract using ABI and address.
      const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
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
      <UserInfo account={account} contacts={contacts} />
      <Notion />
    </div>
  );
}

export default Mypage;
