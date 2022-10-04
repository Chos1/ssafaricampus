// packages
import { useEffect, useState } from "react";
// utils
import useEth from "../../contexts/EthContext/useEth";

const ContractItem = () => {
  const {
    state: { contract, account },
  } = useEth();
  const [contractDetails, setContractDetails] = useState("");

  useEffect(() => {
    const getContractDetails = async () => {
      const contractDetails = await contract.methods
        .viewPurchaseContract()
        .call({ from: account });
      setContractDetails(contractDetails);
    };
    getContractDetails();
  }, [account, contract]);
  console.log(contractDetails);

  return <div>{contractDetails}</div>;
};

export default ContractItem;
