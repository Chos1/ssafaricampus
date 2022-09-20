import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader/MainHeader';

import Login from './pages/Login';
import MainPage from './pages/MainPage';
import ProductDetail from './pages/ProductDetail';
import SignUpMain from './pages/SignUpMain';

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
    <div>
      <MainHeader />
      <main>
        <Routes>
          {/* 비로그인 */}
          <Route path='/' element={<MainPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
          <Route path='/signup' element={<SignUpMain />} />
          {/* 구매자 */}
          <Route path='/mypage/:userId' element={<MyPage />} />
          <Route path='/products/:productId/contract' element={<PurchaseContract />} />
          <Route path='/products/:productId/request' element={<PurchaseRequest />} />
          <Route path='/mypage/:userId/transactionDetail' element={<TransactionDetail />} />
          {/* 판매자 */}
          <Route path='/:userId/orderDetail/:orderId' element={<OrderDetail />} />
          <Route path='/:userId/orderManage' element={<OrderManage />} />
          <Route path='/:userId/product/:productId/manage' element={<ProductManage />} />
          <Route path='/:userId/product/:productId/modify' element={<ProductModify />} />
          <Route path='/:userId/product/regist' element={<ProductRegist />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
