import React from 'react'
import Dashboard from "./Dashboard";
import SideNav from './SideNav';


const Layout = () => {
  return (
    <div className="relative  w-[100%] flex">
      <SideNav />
      <Dashboard />
    </div>
  );
}

export default Layout
