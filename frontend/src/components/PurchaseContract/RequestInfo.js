import { useEffect, useState } from "react";

import "./RequestInfo.css";
import useEth from "../../contexts/EthContext/useEth";

const RequestInfo = () => {
  const {
    state: { contract, account },
  } = useEth();
  const [contractDetail, setContractDetail] = useState("");

  const contract_No = window.location.pathname.split("/")[2];
  console.log("contractNo: " + contract_No);

  useEffect(() => {
    const getContractDetails = async () => {
      const contractDetail = await contract.methods
        .viewPurchaseContract()
        .call({ from: account });
      setContractDetail(contractDetail);
    };

    getContractDetails();
    console.log("contractDetail: " + contractDetail);
  }, [account, contract, contract_No]);

  return (
    <div className="request_info">
      <div>
        <div className="request_item">
          <p className="request_label">배송지</p>
          <p className="request_content">
            대전 광역시 어딘가 어느 건물 근처 거기
          </p>
        </div>
        <div className="request_item">
          <p className="request_label">지갑 주소</p>
          <p className="request_content">0x2C9908F99f1a5195195dk2i3o2o1</p>
        </div>
        <div className="request_item">
          <p className="request_label">총 인원</p>
          <p className="request_content">120 명</p>
        </div>
        <div className="request_item">
          <p className="request_label">총 가격</p>
          <p className="request_content">1,548,000 원</p>
        </div>
      </div>
    </div>
  );
};

export default RequestInfo;
