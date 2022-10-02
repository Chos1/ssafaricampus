import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";

import useEth from "../../contexts/EthContext/useEth";
import "./RequestForm.css";
import MPBtn from "../../components/ui/MPBtn";
import SWBtnPBrd from "../ui/SWBtnPBrd";

import AddressModal from "./AddressModal";
import Postcode from "react-daum-postcode";

const RequestForm = () => {
  const navigate = useNavigate();
  const [isModal, setModal] = useState(false);
  const [ethAddress, setEthAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [people, setPeople] = useState("");
  const [inputs, setInputs] = useState({
    address: "",
    zipCode: "",
  });
  const {
    state: { contract, account },
  } = useEth();

  const { zipCode, address } = inputs;
  const item_No = window.location.pathname.split("/")[2];

  const openModal = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleComplete = (data) => {
    let _fullAddress = data.address;
    let _extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        _extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        _extraAddress +=
          _extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      _fullAddress += _extraAddress !== "" ? ` (${_extraAddress})` : "";
    }

    setInputs({
      address: _fullAddress,
      zipCode: data.zonecode,
    });

    closeModal();
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const detailAddressChangeHandler = (e) => {
    setDetailAddress(e.target.value);
  };
  const ethAddressChangeHandler = (e) => {
    setEthAddress(e.target.value);
  };
  const peopleChangeHandler = (e) => {
    setPeople(e.target.value);
  };

  const createPurchaseContract = async (e) => {
    e.preventDefault();
    const web3 = new Web3(
      Web3.givenProvider ||
        "https://goerli.infura.io/v3/7885ac55f47f453488027010d12acadb"
    );
    const contractId = await contract.methods
      .purchaseItem(
        item_No,
        ethAddress,
        "[" + zipCode + "] " + address + " " + detailAddress,
        people,
        0,
        false
      )
      .send({
        from: account,
        gas: 412040,
        value: web3.utils.toWei("0.001", "ether"),
      });
    // navigate("/purchaseContract/:transactionId");
    console.log(contractId);
  };

  return (
    <>
      <form className="request_inputgroup">
        <label>배송 주소</label>
        <input
          placeholder="우편 번호"
          className="shipping_add"
          type="text"
          name="address"
          value={zipCode}
          onChange={onChange}
          readOnly
        />
        <SWBtnPBrd className="add_search" onClick={openModal}>
          검색
        </SWBtnPBrd>
        <input
          placeholder="주소를 입력해주세요"
          className="shipping_add_1"
          type="text"
          name="address"
          value={address}
          onChange={onChange}
          readOnly
        />
        <br />
        <input
          placeholder="상세 주소 입력해주세요"
          className="shipping_add_1"
          type="text"
          value={detailAddress}
          onChange={detailAddressChangeHandler}
        />
        <br />
        <label>지갑 주소</label>
        <input
          placeholder="지갑 주소를 입력해주세요"
          type="text"
          value={ethAddress}
          onChange={ethAddressChangeHandler}
        />
        <br />
        <label>총 인원</label>
        <input
          placeholder="총 인원을 입력해주세요"
          type="number"
          min="1"
          value={people}
          onChange={peopleChangeHandler}
        />
        <br />
        {/* <label>첨부 파일</label>
        <input type="file" placeholder="총 인원을 입력해주세요" className="add_file" />
        <br />
        <label>비밀번호</label>
        <input placeholder="비밀번호를 입력해주세요" />
        <br /> */}
        <MPBtn onClick={createPurchaseContract}>신청하기</MPBtn>
      </form>
      <AddressModal open={isModal} close={closeModal}>
        <Postcode onComplete={handleComplete} />
      </AddressModal>
    </>
  );
};

export default RequestForm;
