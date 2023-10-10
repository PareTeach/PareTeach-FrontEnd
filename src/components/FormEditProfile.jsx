import React from "react";

const FormEditProfile = () => {
  return (
    <div className="bg-background_green_light flex w-[600px] p-10 rounded-md flex-col">
      {/* image and name  */}
      <div className="flex items-center gap-x-20 mb-10">
        {/* image */}
        <div className="flex h-[100px] w-[100px] justify-center items-center">
          <img
            src="../src/assets/profile.jpeg"
            className="h-[100px] w-[100px] object-cover rounded-full"
          />
        </div>

        {/* name and other details */}
        <div className="flex flex-col">
          {/* user name */}
          <span className="font-semibold">Username</span>
          <span>John@gmail.com - Administrator</span>
        </div>
      </div>

      {/* input fields */}
      <>
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm">Username</span>
            <input
              type="text"
              className="w-80 bg-background_light rounded-sm text-gray-600 pl-4 py-[4px] outline-none text-xs"
            />
            <button className="h-[35xp] w-[35px] rounded-full bg-red-200 text-sm">
              Edit
            </button>
          </div>
        ))}
      </>

      {/* submit button */}
      <button className="bg-primary_dark text-sm py-1 rounded-md mt-10 text-white font-bold">
        Submit
      </button>
    </div>
  );
};

export default FormEditProfile;
