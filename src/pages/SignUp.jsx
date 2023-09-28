import React from "react";
import { WelcomeBackground } from "../components";
import {
  BeakerIcon,
  UserIcon,
  IdentificationIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-[85vh] bg-black flex justify-center items-center relative">
      <WelcomeBackground />

      <div className="w-[35%] h-[80vh] overflow-y-scroll px-16 py-10 m-auto bg-background_light  rounded-md lg:max-w-xl absolute">
        <h1 className="text-xl font-semibold text-center text-black">
          Create account
        </h1>
        <form className="mt-5 flex gap-y-2 flex-col">
          {/* input user name */}
          <div className="mb-2 flex justify-center items-center">
            <input
              type="text"
              placeholder="First Name"
              className="h-10 block w-full px-4 text-[12px] text-black bg-white  outline-none border-b-2 border-black"
            />
          </div>
          {/* input user name */}

          {/* input last name */}
          <div className="mb-2 flex justify-center items-center">
            <input
              type="text"
              placeholder="Last Name"
              className="h-10 block w-full px-4 text-[12px] text-black bg-white  outline-none border-b-2 border-black"
            />
          </div>
          {/* input user name */}

          {/* input user name */}
          <div className="mb-2 flex justify-center items-center">
            <input
              type="text"
              placeholder="User Name"
              className="h-10 block w-full px-4 text-[12px] text-black bg-white  outline-none border-b-2 border-black"
            />
          </div>
          {/* input user name */}

          {/* input user id */}
          <div className="mb-2 flex justify-center items-center">
            <input
              type="text"
              placeholder="User ID"
              className="h-10 block w-full px-4 text-[12px] text-black bg-white  outline-none border-b-2 border-black"
            />
          </div>
          {/* input user name */}

          {/* input nic */}
          <div className="mb-2 flex justify-center items-center">
            <input
              type="text"
              placeholder="NIC"
              className="h-10 block w-full px-4 text-[12px] text-black bg-white  outline-none border-b-2 border-black"
            />
          </div>
          {/* input user name */}

          {/* input pw */}
          <div className="mb-2 flex justify-center items-center">
            <input
              type="password"
              placeholder="Password"
              className="h-10 block w-full px-4 text-[12px] text-black bg-white  outline-none border-b-2 border-black"
            />
          </div>

          {/* input conform pw */}
          <div className="mb-2 flex justify-center items-center">
            <input
              type="text"
              placeholder="Conform Password"
              className="h-10 block w-full px-4 text-[12px] text-black bg-white  outline-none border-b-2 border-black"
            />
          </div>
          {/* input user name */}

          {/* button*/}
          <div className="mt-4">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary_dark rounded-md hover:bg-primary_light">
              Create Account
            </button>
          </div>

          <span className="text-xs text-black">
            I agree to the Terms of Service and Privacy Policy
          </span>
        </form>

        <div className="h-[.5px] bg-black w-full mt-4" />

        <p className="mt-4 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <Link
            replace
            to={"/login"}
            className="font-medium text-red-500 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
