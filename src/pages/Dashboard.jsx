import React from "react";
import Navbar from "../components/Navbar";
import MenuListItems from "../components/MenuListItems";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container flex-row">
        <MenuListItems />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
