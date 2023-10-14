import React, { useState } from "react";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const img =
  "https://images.unsplash.com/photo-1697275021816-42588f48ef7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80";

const FormTeacher = () => {
  const [teacherDetails, setTeacherDetails] = useState({
    user_name: "",
    user_id: "",
    class: "",
    first_name: "",
    last_name: "",
  });
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const [isIndicating, setIsIndicating] = useState(false);

  const addTeacher = async () => {
    const todoCollection = collection(db, "users");
    // if (!todoTitle || !todoDescription) return;
    setIsIndicating(true);
    try {
      await addDoc(todoCollection, {
        user_name: teacherDetails.user_name,
        user_id: teacherDetails.user_id,
        first_name: teacherDetails.first_name,
        last_name: teacherDetails.last_name,
        role: "Teacher",
        date: new Date(),
        class: teacherDetails.class,
      });
      setIsIndicating(false);
      alert("added");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" text-black  h-[80vh] flex justify-center items-center">
      <div className="bg-background_green_light flex w-[600px] p-10 rounded-md flex-col">
        {/* image and name  */}
        <div className="flex items-center gap-x-12 mb-10">
          {/* image */}
          <div className="flex h-[100px] w-[100px] justify-center items-center">
            <img
              src={img}
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
        <div className="flex justify-between items-center mb-4 flex-col gap-y-2">
          <div className="flex justify-between w-full">
            <label className="text-sm">User name</label>
            <input
              value={teacherDetails.user_name}
              onChange={(e) =>
                setTeacherDetails((prev) => ({
                  ...prev,
                  user_name: e.target.value,
                }))
              }
              type="text"
              className="w-96 bg-background_light rounded-sm text-gray-600 pl-4 py-[4px] outline-none text-xs"
            />
          </div>

          {/* --- Teacher ID */}
          <div className="flex justify-between  w-full">
            <label className="text-sm">Teacher ID</label>
            <input
              value={teacherDetails.user_id}
              onChange={(e) =>
                setTeacherDetails((prev) => ({
                  ...prev,
                  user_id: e.target.value,
                }))
              }
              ty
              type="text"
              className="w-96 bg-background_light rounded-sm text-gray-600 pl-4 py-[4px] outline-none text-xs"
            />
          </div>

          {/* --- Class */}
          <div className="flex justify-between  w-full">
            <label className="text-sm">Class</label>
            <input
              value={teacherDetails.class}
              onChange={(e) =>
                setTeacherDetails((prev) => ({
                  ...prev,
                  class: e.target.value,
                }))
              }
              ty
              type="text"
              className="w-96 bg-background_light rounded-sm text-gray-600 pl-4 py-[4px] outline-none text-xs"
            />
          </div>

          {/* --- first name */}
          <div className="flex justify-between  w-full">
            <label className="text-sm">First name</label>
            <input
              value={teacherDetails.first_name}
              onChange={(e) =>
                setTeacherDetails((prev) => ({
                  ...prev,
                  first_name: e.target.value,
                }))
              }
              ty
              type="text"
              className="w-96 bg-background_light rounded-sm text-gray-600 pl-4 py-[4px] outline-none text-xs"
            />
          </div>

          {/* --- last name */}
          <div className="flex justify-between  w-full">
            <label className="text-sm">Last name</label>
            <input
              value={teacherDetails.last_name}
              onChange={(e) =>
                setTeacherDetails((prev) => ({
                  ...prev,
                  last_name: e.target.value,
                }))
              }
              ty
              type="text"
              className="w-96 bg-background_light rounded-sm text-gray-600 pl-4 py-[4px] outline-none text-xs"
            />
          </div>
        </div>

        {/* submit button */}
        <button
          onClick={addTeacher}
          className="bg-primary_dark text-sm py-2 w-[100px] rounded-md mt-4 text-white font-bold"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default FormTeacher;
