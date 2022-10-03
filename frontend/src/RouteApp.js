import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import ProductDetail from "./pages/ProductDetail";
import SignUpMain from "./pages/SignUpMain";
import SignUpSeller from "./pages/SignUpSeller";
import SignUpCustomer from "./pages/SignUpCustomer";

import MyPage from "./pages/customer/MyPage";
import PurchaseContract from "./pages/customer/PurchaseContract";
import PurchaseRequest from "./pages/customer/PurchaseRequest";
import TransactionDetail from "./pages/customer/TransactionDetail";

import OrderDetail from "./pages/seller/OrderDetail";
import OrderManage from "./pages/seller/OrderManage";
import ProductManage from "./pages/seller/ProductManage";
import ProductModify from "./pages/seller/ProductModify";
import ProductRegist from "./pages/seller/ProductRegist";
import FirstMain from "./pages/FirstMain";
function RouteApp() {
  const userType = useSelector((state) => state.user.role);
  const isLogin = useSelector((state) => state.auth.isAuthenticated);

  const Pages = (
    <Fragment>
      <Route path="/firstmain" element={<FirstMain />} />

      <Route path="/main" element={<MainPage />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Fragment>
  );

  const GuestPages = (
    <Fragment>
      <Route path="*" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpMain />} />
      <Route path="/signup/customer" element={<SignUpCustomer />} />
      <Route path="/signup/seller" element={<SignUpSeller />} />
    </Fragment>
  );

  const CustomerPages = (
    <Fragment>
      <Route path="*" element={<MainPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/purchaseContract/:transactionId" element={<PurchaseContract />} />
      <Route path="/productRequest/:productId" element={<PurchaseRequest />} />
      <Route path="/mypage/:transactionId/transactionDetail" element={<TransactionDetail />} />
    </Fragment>
  );

  const SellerPages = (
    <Fragment>
      <Route path="*" element={<OrderManage />} />
      <Route path="/orderManage" element={<OrderManage />} />
      <Route path="/productRegist" element={<ProductRegist />} />
      <Route path="/orderDetail/:orderId" element={<OrderDetail />} />
      <Route path="/productManage/:productId" element={<ProductManage />} />
      <Route path="/productModify/:productId" element={<ProductModify />} />
    </Fragment>
  );

  return (
    <Routes>
      {Pages}
      {isLogin ? null : GuestPages}
      {userType === "USER" ? CustomerPages : null}
      {userType === "COMPANY" ? SellerPages : null}
    </Routes>
  );
}

export default RouteApp;
