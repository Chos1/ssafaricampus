import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/index";
import { Provider } from "react-redux";

import RouteApp from "./RouteApp";
import MainHeader from "./components/MainHeader/MainHeader";
import MainFooter from "./components/MainFooter/MainFooter";
import EthProvider from "./contexts/EthContext/EthProvider";

function App() {
  console.log("a");

  return (
    <EthProvider contract="SsfariFactory">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainHeader />
          <RouteApp />
          <MainFooter />
        </PersistGate>
      </Provider>
    </EthProvider>
  );
}

export default App;
