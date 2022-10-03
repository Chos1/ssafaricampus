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
      const contractDetail = await contract.methods.viewPurchaseContractByPurchaseNod(contract_No).call({ from: account });
      setContractDetail(contractDetail);
    };

    getContractDetails();
  }, [account, contract, contract_No]);
  console.log(contractDetail);

  return (
    <div className="request_info">
      <div>
        <div className="request_item">
          <p className="request_label">배송지</p>
          <p className="request_content">{contractDetail.shipping_address}</p>
        </div>
        <div className="request_item">
          <p className="request_label">지갑 주소</p>
          <p className="request_content">{contractDetail.purchase_address}</p>
        </div>
        <div className="request_item">
          <p className="request_label">총 인원</p>
          <p className="request_content">{contractDetail.total_people} 명</p>
        </div>
        <div className="request_item">
          <p className="request_label">총 가격</p>
          <p className="request_content">{(contractDetail.total_price * 1).toLocaleString("ko-KR")} 원</p>
        </div>
      </div>
    </div>
  );
};

export default RequestInfo;
