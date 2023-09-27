import React from "react";
import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="w-[300px] bg-primary_light">
      <div className="flex flex-col">
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
        <NavLink to={"/user-management"}>User Management</NavLink>
        <NavLink to={"/data-management"}>Data Management</NavLink>
        <NavLink to={"/communication"}>Communication</NavLink>
        <NavLink to={"/report-analysis"}>Report & Analysis</NavLink>
        <NavLink to={"/settings"}>Settings</NavLink>
        <NavLink to={"/logout"}>Logout</NavLink>
      </div>
    </div>
  );
};

export default SideNavbar;
