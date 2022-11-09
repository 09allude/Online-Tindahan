import React, { Component } from 'react';
import "../components/Dashboard_Pages_Styles.css";
// import myaccount from './Dashboard_MenuPages/myAccount';
import My_Purchase from './Dashboard_MenuPages/My_Purchase';

import { Link, useNavigate } from 'react-router-dom';

export class Dashboard_Page extends Component {
// selected var = navigate

  constructor(props) {
   super (props);
   console.log("props from dashboard : ", this.props.sample);
    this.state = {
      screen:  this.props.sample,
      myPurchase: false,
    
    };
  }

  // if(selected === userAccount ) {
  //   this.setState({ userAccount: true })
  // }

  // onClick() {
  //   let navigate = useNavigate()
  //   console.log("asddfsdf");
  //   navigate("/myAccount");
  //   return <myAccount />
  // }

render () {


  return (
    <div className="Dashboard_Frame">
      <div className="Dashboard_Menu">

        <ul>
          {/* <li>
            <Link className="myAccount" onClick={this.onClick}>My Account</Link>
          </li> */}
          <li>
              <Link className={this.state.screen == "myaccount" ? 'text-red-500' : 'text-slate-500' && 'p-2'}  to="/myAccount">My Account</Link>
          </li>
          <li>
            <Link>My Purchase</Link> 
          </li>
          <li>
            <Link>Notifications</Link>
          </li>
          <li>
            <Link>My Vouchers</Link>
          </li>
        </ul>
      </div>

      {/* <div id="Menu_Frame" className="Menu_Frame">
        <MyAccount />
      </div> */}

      {/* { this.state.visible ? <div> <MyAccount /> <div/> : null } */}

    </div>
  )
}

}

export default Dashboard_Page;