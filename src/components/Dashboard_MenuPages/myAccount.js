import React from 'react';

import NavBar from '../NavBar';
import DashboardSideBar from '../Dashboard_SideBar';

const myAccount = (props) => {

  console.log(props)

  return (
    <div className="flex">
      <NavBar />
      <div className="flex items-center w-full border-solid border-2 border-purple-600">
        <DashboardSideBar sample={'myAccount'} />
        
        <div className="border-solid border-2 border-red-600">
          <div>
            <h1>My Profile</h1>
            <form>
              <h1>Username: </h1>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default myAccount