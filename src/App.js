import React from "react";

import { Routes, Route } from "react-router-dom";

import LogIn from "./routers/LogIn";
import Dashboard from "./routers/Dashboard";
import MyAccount from "./components/Dashboard_MenuPages/myAccount";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/MyAccount" element={<MyAccount />} />
    </Routes>
  );
}

export default App;
