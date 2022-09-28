import { Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/index';
import { Provider } from 'react-redux';
import { EthProvider } from "./contexts/EthContext";

import MainHeader from './components/MainHeader/MainHeader';
import MainFooter from './components/MainFooter/MainFooter';

import Login from './pages/Login';
import MainPage from './pages/MainPage';
import ProductDetail from './pages/ProductDetail';
import SignUpMain from './pages/SignUpMain';
import SignUpSeller from './pages/SignUpSeller';
import SignUpCustomer from './pages/SignUpCustomer';

import MyPage from './pages/customer/MyPage';
import PurchaseContract from './pages/customer/PurchaseContract';
import PurchaseRequest from './pages/customer/PurchaseRequest';
import TransactionDetail from './pages/customer/TransactionDetail';

import OrderDetail from './pages/seller/OrderDetail';
import OrderManage from './pages/seller/OrderManage';
import ProductManage from './pages/seller/ProductManage';
import ProductModify from './pages/seller/ProductModify';
import ProductRegist from './pages/seller/ProductRegist';

function App() {
  return (
    <EthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <MainHeader />
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/main' element={<MainPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/products/:productId' element={<ProductDetail />} />
              <Route path='/signup' element={<SignUpMain />} />
              <Route path='/signup/customer' element={<SignUpCustomer />} />
              <Route path='/signup/seller' element={<SignUpSeller />} />

              <Route path='/mypage' element={<MyPage />} />
              <Route path='/purchaseContract/:transactionId' element={<PurchaseContract />} />
              <Route path='/productRequest/:productId' element={<PurchaseRequest />} />
              <Route path='/mypage/:transactionId/transactionDetail' element={<TransactionDetail />} />
              
              <Route path='/orderManage' element={<OrderManage />} />
              <Route path='/productRegist' element={<ProductRegist />} />
              <Route path='/orderDetail/:orderId' element={<OrderDetail />} />
              <Route path='/productManage/:productId' element={<ProductManage />} />
              <Route path='/productModify/:productId' element={<ProductModify />} />
            </Routes>
          <MainFooter />
        </PersistGate>
      </Provider>
    </EthProvider>
  );
}

export default App;
