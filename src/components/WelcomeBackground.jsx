import React from "react";

const WelcomeBackground = () => {
  return (
    <>
      <img
        src="../src/assets/background.png"
        className="object-cover h-[85vh] w-full"
      />
      <div className="h-[85vh] w-full absolute bg-white/50" />
    </>
  );
};

export default WelcomeBackground;
