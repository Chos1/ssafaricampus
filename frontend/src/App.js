import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/index";
import { Provider, useSelector } from "react-redux";
import { EthProvider } from "./contexts/EthContext";

import RouteApp from "./RouteApp";
import MainHeader from "./components/MainHeader/MainHeader";
import MainFooter from "./components/MainFooter/MainFooter";

function App() {
  try {
    const userType = useSelector((state) => state.user.role);
    console.log("user type : " + userType);
  } catch {}

  return (
    <EthProvider>
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
