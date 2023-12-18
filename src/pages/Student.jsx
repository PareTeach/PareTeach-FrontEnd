import React, { useEffect, useState } from "react";
import { TeacherTable } from "../components";
import StudentTable from "../components/StudentTable";

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Student = () => {
  const [teacherList, setTeacherList] = useState([]);
  const [isEmptyList, setIsEmptyList] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const q = query(collection(db, "users"), where("role", "==", "Student"));

  const getTodoList = async () => {
    try {
      const data = await getDocs(q);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filterData);
      setTeacherList(filterData);
      if (filterData.length == 0) {
        setIsEmptyList(true);
      } else {
        setIsEmptyList(false);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const updateList = () => {
    getTodoList();
  };

  return (
    <div className="h-[80vh] flex justify-center items-center">
      <StudentTable teacherList={teacherList} updateList={updateList} />
    </div>
  );
};

export default Student;
