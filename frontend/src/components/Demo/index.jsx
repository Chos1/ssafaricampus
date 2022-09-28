import Web3 from "web3";
import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

function Demo() {
  const { state } = useEth();
  const [value, setValue] = useState("?");
  const {state: { contract, accounts }} = useEth();
  const [inputValue, setInputValue] = useState("");

  const read = async () => {
    console.log("읽기시작");
    const value = await contract.methods.read().call();
    setValue(value);
    console.log("읽기끝");
  };

  const handleInputChange = (e) => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const write = async (e) => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue = parseInt(inputValue);
    console.log("쓰기시작");
    const web3 = new Web3(Web3.givenProvider || "https://goerli.infura.io/v3/7885ac55f47f453488027010d12acadb");
    await contract.methods.write(newValue).send({ from: accounts[0], gas: 412040, value: web3.utils.toWei("0.001", "ether") });
    console.log("쓰기끝");
    setInputValue('');
  };

  const demo =
    <div className="contract-container">
      <div>
        <p>Now value: {value} {<button onClick={read}>read()</button>}</p>
      </div>
      <div>
        <input type="text" placeholder="uint" value={inputValue} onChange={handleInputChange} />
        <button onClick={write}>write</button>
      </div>
    </div>

  return (
    <div className="demo">
      <h1>Simple storage - value check, update</h1>
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      }
    </div>
  );
}

export default Demo;
