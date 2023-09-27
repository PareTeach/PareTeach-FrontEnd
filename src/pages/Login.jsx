import React from "react";

const Login = () => {
  return (
    <div className="h-[85vh] bg-black flex justify-center items-center relative">
      <img
        src="../src/assets/background.png"
        className="object-cover h-[85vh] w-full"
      />
      <div className="h-[85vh] w-full absolute bg-white/40" />
      <span className="absolute text-8xl w-8/12 leading-[1.2] font-semibold text-center text-black">
        login
      </span>
    </div>
  );
};

export default Login;
