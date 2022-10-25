import React, { useState } from 'react';
import "../components/Dashboard_Pages_Styles.css";
import Dashboard_User from './Dashboard_MenuPages/Dashboard_User';

import { Link } from 'react-router-dom';

const Dashboard_Page = () => {
  
  const [ activeMenu, setActiveMenu ] = React.useState( false );
  const handleClick = () => {
    if(activeMenu == true) {
      return (
        <div>
          <Dashboard_User />
        </div>
      )
    } else {
      setActiveMenu(!activeMenu);
    }
  }

  // function onClick_Menu() {
  //   var displayMenu = document.getElementById("Menu_Frame");

  //   if ( displayMenu.style.display == 'none' ) {
  //     display.style.display === 'block';
  //   } else {
  //     display.style.display === 'none'
  //   }
  // }

  return (
    <div className="Dashboard_Frame">
      <div className="Dashboard_Menu">

        <ul>
          <li>
            <Link className="myAccount">My Account</Link>
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

        <button onClick={handleClick} >Click Me!</button>
      </div>

      <div id="Menu_Frame" className="Menu_Frame">
        <Dashboard_User />
      </div>

      {/* { this.state.visible ? <div> <Dashboard_User /> <div/> : null } */}

    </div>
  )
}

export default Dashboard_Page;