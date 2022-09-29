import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/index";
import { Provider, useSelector } from "react-redux";

import RouteApp from "./RouteApp";
import MainHeader from "./components/MainHeader/MainHeader";
import MainFooter from "./components/MainFooter/MainFooter";

function App() {
  console.log("a");

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainHeader />
        <RouteApp />
        <MainFooter />
      </PersistGate>
    </Provider>
  );
}

export default App;
