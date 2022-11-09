import React from 'react';

import NavBar from '../NavBar';
import DashboardSideBar from '../Dashboard_SideBar';
const myAccount = () => {
  return (
    <div className="flex">
      <NavBar />
      {/* className="flex justify-center items-center content-center border-solid border-2 border-red-600" */}
      <div>
        <DashboardSideBar sample={'myAccount'} />
        
        <div>
          <h1>My Account</h1>
        </div>
      </div>

    </div>
  )
}

export default myAccount