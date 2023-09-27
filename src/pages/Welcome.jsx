import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="h-[85vh] bg-black flex justify-center items-center relative">
      <img
        src="../src/assets/background.png"
        className="object-cover h-[85vh] w-full"
      />
      <div className="h-[85vh] w-full absolute bg-white/40" />
      <span className="absolute text-8xl w-8/12 leading-[1.2] font-semibold text-center text-black">
        WELCOME TO THE ADMIN PANEL
      </span>

      <Link
        to={"/login"}
        replace
        className="absolute bottom-14 right-10 bg-primary_dark px-8 py-3 rounded-md"
      >
        Login
      </Link>
    </div>
  );
};

export default Welcome;
