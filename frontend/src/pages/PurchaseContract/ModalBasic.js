// packages
import Web3 from "web3";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// utils
import useEth from "../../contexts/EthContext/useEth";
// css
import "./css/ModalBasic.css";

const ModalBasic = (props) => {
  const navigate = useNavigate();
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, cont_pass, itemNo, contract_No } = props;
  const {
    state: { contract, account },
  } = useEth();

  const [password, setPassword] = useState("");

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const payContract = async () => {
    // item_No, uint _purchase_No, address _paid_address
    const itemDetail = await contract.methods.viewItemByItemNo(itemNo).call({ from: account });
    const etherprice = itemDetail.item_price / 20000000;
    const web3 = new Web3(Web3.givenProvider || "https://goerli.infura.io/v3/7885ac55f47f453488027010d12acadb");
    await contract.methods.paidContract(itemNo, contract_No, account).send({
      from: account,
      gas: 412040,
      value: web3.utils.toWei(`${etherprice}`, "ether"),
    });
  };
  const passCheck = async (e) => {
    if (cont_pass === password) {
      await payContract();
      alert("결제가 완료되었습니다.");
      close();
      navigate("/mypage");
    } else {
      alert("응 안돼");
    }
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal2" : "modal2"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            {props.children}

            <input type="password" value={password} onChange={passwordChangeHandler} />
            <button className="accept" onClick={passCheck}>
              입력
            </button>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default ModalBasic;
