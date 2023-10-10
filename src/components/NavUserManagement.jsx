import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const NavItem = {
  ADMIN: "Admin",
  TEACHER: "Teacher",
  STUDENt: "Student",
  PARENT: "Parent",
};

const NavUserManagement = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(NavItem.ADMIN);

  const handleNavigate = (item) => {
    navigate(`/user-management/${item}`);
    setSelectedItem(item);
  };

  useEffect(() => {
    navigate(`/user-management/${selectedItem}`);
  }, []);

  return (
    <>
      <div className="bg-primary_light flex justify-around h-[5vh]">
        {Object.values(NavItem).map((item, index) => (
          <div
            key={index}
            className={
              selectedItem === item
                ? "border-white bg-background_light text-black border-l flex w-full justify-center py-2 cursor-pointer"
                : "border-black border-r flex w-full justify-center py-2 cursor-pointer"
            }
            onClick={() => handleNavigate(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default NavUserManagement;
