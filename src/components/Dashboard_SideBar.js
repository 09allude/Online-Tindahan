import React, { Component } from 'react';
import "../components/Dashboard_Pages_Styles.css";

import { Link } from 'react-router-dom';

export class Dashboard_Page extends Component {

  constructor(props) {
   super (props);
   console.log("props from dashboard : ", this.props.sample);
    this.state = {
      screen: this.props.sample,
    };
  }



render () {

  return (
    // <div className="Dashboard_Frame">
    //   <div className="Dashboard_Menu">
    <div className="border-solid border-2 border-blue-600 h-screen bg-gray-200">
      <div className="border-solid border-2 border-green-600 bg-gray-200 flex w-9/12 h-screen p-20 pr-0 justify-center items-center">
        <ul className="border-solid border-2 border-green-600 w-48 flex flex-col items-center">
          {/* My_Account = 1st screen onClick Login */}
          <li className="list-none pt-10">
            <Link className={ this.state.screen === "myAccount" ? 'bg-sky-400 rounded-md p-2' : 'text-slate-500 hover:text-red-600' } to="/myAccount" >My Account</Link>
          </li>
          <li className="list-none pt-10">
            <Link className={ this.state.screen === "myPurchase" ? 'bg-sky-400 rounded-md p-2' : 'text-slate-500 hover:text-red-600' } to="/myPurchase" >My Purchase</Link> 
          </li>
          <li className="list-none pt-10">
            <Link className={ this.state.screen === "notification" ? 'bg-sky-400 rounded-md p-2' : 'text-slate-500 hover:text-red-600' } to="/notification" >Notifications</Link>
          </li>
          <li className="list-none pt-10">
            <Link className={ this.state.screen === "myVoucher" ? 'bg-sky-400 rounded-md p-2' : 'text-slate-500 hover:text-red-600' } to="/myVoucher" >My Vouchers</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

}

export default Dashboard_Page;