import { useNavigate } from "react-router-dom";

import "./RequestForm.css";
import MPBtn from "../../components/ui/MPBtn";
import SWBtnPBrd from "../ui/SWBtnPBrd";

import React, { useState } from "react";
import AddressModal from "./AddressModal";
import Postcode from "react-daum-postcode";

const RequestForm = () => {
  const navigate = useNavigate();
  const [isModal, setModal] = useState(false);
  const [inputs, setInputs] = useState({
    address: "",
    zipCode: "",
  });

  const { zipCode,address } = inputs;

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
        name="address"
        onChange={onChange}
      />
      <br/>
      <label>지갑 주소</label>
      <input placeholder="지갑 주소를 입력해주세요" />
      <br />
      <label>총 인원</label>
      <input placeholder="총 인원을 입력해주세요" />
      <br />
      <label>첨부 파일</label>
      <input
        type="file"
        placeholder="총 인원을 입력해주세요"
        className="add_file"
      />
      <br />
      <label>비밀번호</label>
      <input placeholder="비밀번호를 입력해주세요" />
      <br />
      <MPBtn
        onClick={() => {
          navigate("/purchaseContract/:transactionId");
        }}
      >
        신청하기
      </MPBtn>
    </form>
    <AddressModal open={isModal} close={closeModal}>
      <Postcode onComplete={handleComplete} />
    </AddressModal>
  </>
  );
};

export default RequestForm;
