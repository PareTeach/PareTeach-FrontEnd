import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const SideNavbar = () => {
  return (
    <div className="w-[300px] bg-primary_light relative flex flex-col items-center">
      {/* logo */}
      <div className="flex justify-center items-center w-full h-[100px]">
        <img className="object-contain" width={90} src={logo} />
      </div>

      <div className="w-[80%] h-[.5px] bg-black/30 absolute top-[15vh]" />

      <div className="flex flex-col mt-[60px] gap-y-3 px-5 w-full">
        <NavLink to={"/dashboard"} className="side_nav_li">
          Dashboard
        </NavLink>
        <NavLink to={"/user-management"} className="side_nav_li">
          User Management
        </NavLink>
        <NavLink to={"/data-management"} className="side_nav_li">
          Data Management
        </NavLink>
        <NavLink to={"/communication"} className="side_nav_li">
          Communication
        </NavLink>
        <NavLink to={"/report-analysis"} className="side_nav_li">
          Report & Analysis
        </NavLink>
        <NavLink to={"/settings"} className="side_nav_li">
          Settings
        </NavLink>
        <NavLink to={"/logout"} className="side_nav_li">
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default SideNavbar;
