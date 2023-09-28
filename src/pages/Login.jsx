import React from "react";
import { WelcomeBackground } from "../components";
import {
  BeakerIcon,
  UserIcon,
  IdentificationIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[85vh] bg-black flex justify-center items-center relative">
      <WelcomeBackground />

      <div className="w-full p-24 m-auto  rounded-md lg:max-w-xl absolute">
        <h1 className="text-xl font-semibold text-center text-black">
          Sign In to your account
        </h1>
        <form className="mt-10 flex gap-y-4 flex-col">
          {/* input user name */}
          <div className="mb-2 flex justify-center items-center">
            <div className="bg-white border-b-4 border-black h-12 w-12 flex justify-center items-center">
              <UserIcon className="h-4 w-4 bg-white text-black" />
            </div>
            <input
              type="text"
              placeholder="Username"
              className="h-12 block w-full text-purple-700 bg-white  outline-none border-b-4 border-black"
            />
          </div>
          {/* input user name */}

          {/* input user Id */}
          <div className="mb-2 flex justify-center items-center">
            <div className="bg-white border-b-4 border-black h-12 w-12 flex justify-center items-center">
              <IdentificationIcon className="h-4 w-4 bg-white text-black" />
            </div>
            <input
              type="text"
              placeholder="User ID"
              className="h-12 block w-full text-purple-700 bg-white  outline-none border-b-4 border-black"
            />
          </div>
          {/* input user name */}

          {/* input user PW */}
          <div className="mb-2 flex justify-center items-center">
            <div className="bg-white border-b-4 border-black h-12 w-12 flex justify-center items-center">
              <LockClosedIcon className="h-4 w-4 bg-white text-black" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="h-12 block w-full text-purple-700 bg-white  outline-none border-b-4 border-black"
            />
          </div>
          {/* input user name */}

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary_dark rounded-md hover:bg-primary_light">
              Login
            </button>
          </div>

          <a href="#" className="text-xs text-black hover:underline">
            Forget Password?
          </a>
        </form>

        <div className="h-[.5px] bg-black w-full mt-8" />
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <NavLink
            replace
            to={"/signup"}
            className="font-medium text-red-500 hover:underline"
          >
            Create Account
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
