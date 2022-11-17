import React from "react";

import { Routes, Route } from "react-router-dom";

import Testing from "./components/testing";

import LogIn from "./routers/LogIn";
import Dashboard from "./routers/Dashboard";
import MyAccount from "./components/Dashboard_MenuPages/myAccount";
import MyPurchase from "./components/Dashboard_MenuPages/myPurchase";
import Notification from "./components/Dashboard_MenuPages/Notification";
import Voucher from "./components/Dashboard_MenuPages/myVoucher";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Testing />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/MyAccount" element={<MyAccount />} />
      <Route path="/myPurchase" element={<MyPurchase />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/myVoucher" element={<Voucher />} />
    </Routes>
  );
}

export default App;
