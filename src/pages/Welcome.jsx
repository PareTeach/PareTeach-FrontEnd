import React from "react";
import { Link } from "react-router-dom";
import { WelcomeBackground } from "../components";

const Welcome = () => {
  return (
    <div className="h-[85vh] bg-black flex justify-center items-center relative">
      <WelcomeBackground />
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
