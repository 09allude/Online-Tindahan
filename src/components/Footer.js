import React from 'react';
import "../components/Footer.css";
import About_OT from './Footer_Menus.js/About_OT';
import Customer_Service from './Footer_Menus.js/Customer_Service';
import Payment from './Footer_Menus.js/Payment';
import Follow_Us from './Footer_Menus.js/Follow_Us';
import OT_AppDL from './Footer_Menus.js/OT_AppDL';

const Footer = () => {
  return (
    <div className="justify-around flex items-start content-center flex-wrap">
      <Customer_Service/>
      <About_OT />
      <Payment />
      <Follow_Us />
      <OT_AppDL />
    </div>
  )
}

export default Footer