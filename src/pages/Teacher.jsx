import React, { useEffect, useState } from "react";
import { FormEditProfile, TeacherTable } from "../components";

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

const Teacher = () => {
  const [teacherList, setTeacherList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmptyList, setIsEmptyList] = useState(false);
  const [isIndicating, setIsIndicating] = useState(false);
  const q = query(collection(db, "users"), where("role", "==", "Teacher"));

  const getTodoList = async () => {
    try {
      const data = await getDocs(q);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
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
      <TeacherTable teacherList={teacherList} updateList={updateList} />
    </div>
  );
};

export default Teacher;
