import React from 'react';
import "../components/Dashboard_Pages_Styles.css";
import Dashboard_User from './Dashboard_MenuPages/Dashboard_User';

import { Link } from 'react-router-dom';

const Dashboard_Page = () => {
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
                                    {/* DI KA PA SURE SA "LINK", MEMA MO LANG YAN */}
                                    {/* SHOW & HIDE ELEMENT ON CLICK, YAN SEARCH MO */}
          <li>
            <Link>Notifications</Link>
          </li>
          <li>
            <Link>My Vouchers</Link>
          </li>
        </ul>
      </div>
      <div className="Menu_Frame">
        <Dashboard_User />
      </div>
    </div>
  )
}

export default Dashboard_Page;