import React, { useReducer, useCallback, useEffect } from "react";
import Web3 from "web3";
import EthContext from "./EthContext";
import { reducer, actions, initialState } from "./state";

function EthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const init = useCallback(async (artifact) => {
    if (artifact) {
      const web3 = new Web3(Web3.givenProvider || "https://goerli.infura.io/v3/7885ac55f47f453488027010d12acadb");
      // const web3 = new Web3("https://goerli.infura.io/v3/7885ac55f47f453488027010d12acadb");
      const signer = web3.eth.accounts.privateKeyToAccount("649be48b389e86f84348b66bf3bcf8feb0bb4b401ea5c37a05e4c5c3b27d7c5f");
      // console.log(signer);
      // web3.eth.accounts.wallet.add(signer);
      // console.log(signer.address);
      const accounts = [signer.address];
      // console.log(acc);
      // const accounts = await web3.eth.getAccounts();
      // console.log(accounts);
      const networkID = await web3.eth.net.getId();
      const { abi } = artifact;
      let address, contract;
      try {
        address = artifact.networks[networkID].address;
        contract = new web3.eth.Contract(abi, address);
      } catch (err) {
        console.error(err);
      }
      dispatch({
        type: actions.init,
        data: { artifact, web3, accounts, networkID, contract },
      });
    }
  }, []);

  useEffect(() => {
    const tryInit = async () => {
      try {
        const artifact = require("../../contracts/SimpleStorage.json");
        init(artifact);
      } catch (err) {
        console.error(err);
      }
    };

    tryInit();
  }, [init]);

  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    const handleChange = () => {
      init(state.artifact);
    };

    events.forEach((e) => window.ethereum.on(e, handleChange));
    return () => {
      events.forEach((e) => window.ethereum.removeListener(e, handleChange));
    };
  }, [init, state.artifact]);

  return (
    <div>
      <EthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {children}
      </EthContext.Provider>
    </div>
  );
}

export default EthProvider;
