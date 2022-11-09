import React, { Component } from 'react';
import "../components/Dashboard_Pages_Styles.css";
import myAccount from './Dashboard_MenuPages/myAccount';

import { Link, useNavigate } from 'react-router-dom';

export class Dashboard_Page extends Component {
// selected var = navigate

  constructor(props) {
   super (props);
   console.log("props from dashboard : ", this.props.sample);
    this.state = {
      screen: this.props.sample,
      // myPurchase: false,
    };
  }

render () {


  return (
    <div className="Dashboard_Frame">
      <div className="Dashboard_Menu">

        <ul>
          {/* My_Account = 1st screen onClick Login */}
          <li>
              <Link className={ this.state.screen == "myAccount" ? 'text-red-500' : 'text-slate-500' } to="/myAccount" >My Account</Link>
          </li>
          <li>
            <Link className={ this.state.screen == "myPurchase" ? 'text-red-500' : 'text-slate-500' } to="/myPurchase" >My Purchase</Link> 
          </li>
          <li>
            <Link className={ this.state.screen == "notification" ? 'text-red-500' : 'text-slate-500' } to="/notification" >Notifications</Link>
          </li>
          <li>
            <Link className={ this.state.screen == "myVoucher" ? 'text-red-500' : 'text-slate-500' } to="/myVoucher" >My Vouchers</Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

}

export default Dashboard_Page;