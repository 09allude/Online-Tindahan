import React from 'react';

import NavBar from '../NavBar';
import DashboardSideBar from '../Dashboard_SideBar';
const myAccount = () => {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex items-center w-full border-solid border-2 border-red-600">
        <DashboardSideBar sample={'myAccount'} />
        
        <div className="border-solid border-2 border-red-600">
          <div>
            <h1>My Account</h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default myAccount