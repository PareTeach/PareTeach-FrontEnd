import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";

const StudentTable = ({ teacherList, updateList }) => {
  const navigate = useNavigate();
  function EditHandler(item) {
    navigate(`/user-management/Teacher/${item}`);
  }

  const deleteTeacher = async (id) => {
    // setClickedButoonId(id);
    // setIsDeleteBtnIndicating(true);
    const todoDoc = doc(db, "users", id);
    try {
      await deleteDoc(todoDoc);
      updateList();
      alert("deleted");
    } catch (error) {
      console.log(error);
      alert("error");
    }
    // getTodoList();
    // setIsDeleteBtnIndicating(false);
  };

  return (
    <div className="flex flex-col">
      {!teacherList.length == 0 && (
        <table className="text-sm w-full text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-primary_dark flex w-full">
            <tr>
              <th scope="col" className="w-[150px] p-2">
                Student ID
              </th>
              <th scope="col" className="w-[150px] p-2">
                Student Name
              </th>
              <th scope="col" className="w-[150px] p-2">
                Class
              </th>
              <th scope="col" className="w-[150px] p-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody
            className="bg-grey-light flex flex-col items-center overflow-y-scroll w-full h-[50vh]"
            // style="height: 50vh;"
          >
            {teacherList.map((item, index) => (
              <tr
                key={item}
                className="border-b lex w-full bg-primary_light border-gray-700  text-white"
              >
                <td scope="row" className="w-[150px] p-2">
                  {item.user_id}
                </td>
                <td scope="row" className="w-[150px] p-2">
                  {item.first_name} {item.last_name}
                </td>
                <td scope="row" className="w-[150px] p-2">
                  {item.class}
                </td>
                <td scope="row" className="w-[150px] p-2 ">
                  {/* <button
                    disabled
                    onClick={() => EditHandler(index)}
                    className="bg-white text-black rounded-sm px-2 py-1 mr-1"
                  >
                    Edit
                  </button> */}
                  <button
                    onClick={() => deleteTeacher(item.id)}
                    className="bg-white text-black rounded-sm px-2 py-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={() => navigate("/user-management/Student/Add")}
        className="bg-primary_dark text-sm py-2 px-4 rounded-md mt-4 text-white font-bold"
      >
        Add Student
      </button>
    </div>
  );
};

export default StudentTable;
