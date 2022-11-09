import React from 'react'

import NavBar from '../components/NavBar';
import DashboardSideBar from '../components/Dashboard_SideBar';
// import MyAccount from '../components/Dashboard_MenuPages/MyAccount';
// import My_Purchase from '../components/Dashboard_MenuPages/My_Purchase';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <DashboardSideBar sample={true} />
    </div>
  )
}

export default Dashboard;