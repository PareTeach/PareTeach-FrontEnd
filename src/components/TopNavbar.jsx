import React from "react";
import logo from "../assets/logo.png";
import { BeakerIcon, BellIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

const TopNavbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-primary_dark h-[15vh] relative px-4 flex justify-between items-center">
      <div className="h-[100px] w-[80px] flex justify-center items-center">
        {pathname === "/" && (
          <img className="object-contain" width={90} src={logo} />
        )}
      </div>
      <div className="flex gap-x-5">
        <input
          type="text"
          placeholder="Search"
          className="bg-background_light rounded-full w-60 text-gray-600 pl-3 outline-none text-sm"
        />
        <BellIcon className="h-9 w-9 bg-background_light text-black rounded-full p-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default TopNavbar;
