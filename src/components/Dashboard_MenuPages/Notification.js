import React from 'react';

import NavBar from '../NavBar';
import DashboardSideBar from '../Dashboard_SideBar';
const Notification = () => {
  return (
    <div className="flex">
    {/* <NavBar /> */}
    <div className="flex justify-center items-center content-center border-solid border-2 border-red-600">
      <DashboardSideBar sample={'notification'} />
      
      <div>
        <h1>Notifications</h1>
      </div>
    </div>

    </div>
  )
}

export default Notification