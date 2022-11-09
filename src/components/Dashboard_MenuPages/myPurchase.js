import React from 'react';

import NavBar from '../NavBar';
import DashboardSideBar from '../Dashboard_SideBar';
const myPurchase = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center content-center border-solid border-2 border-red-600">
        <DashboardSideBar sample={'myPurchase'} />
        
        <div>
          <h1>my Purchase</h1>
        </div>
      </div>
    </div>
  )
}

export default myPurchase