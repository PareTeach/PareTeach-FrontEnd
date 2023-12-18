import React, { useEffect, useState } from "react";

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

const Dashboard = () => {
  const [teachersCount, setTeachersCount] = useState();
  const [parentsCount, setParentsCount] = useState();
  const [studentsCount, setStudentsCount] = useState();

  const getTeachersCount = async () => {
    const q = query(collection(db, "users"), where("role", "==", "Teacher"));

    try {
      const data = await getDocs(q);
      setTeachersCount(data.size);
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };
  const getStudentCount = async () => {
    const q = query(collection(db, "users"), where("role", "==", "Parent"));

    try {
      const data = await getDocs(q);
      setParentsCount(data.size);
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };
  const getParentCount = async () => {
    const q = query(collection(db, "users"), where("role", "==", "Student"));

    try {
      const data = await getDocs(q);
      setStudentsCount(data.size);
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

  useEffect(() => {
    getTeachersCount();
    getStudentCount();
    getParentCount();
  }, []);
  return (
    <section className="flex h-[85vh] items-center bg-background_light flex-col">
      <span className="text-black my-16 font-semibold text-lg">Overview</span>

      <div className="flex gap-x-20 mt-2">
        {/* Registered Teachers */}
        <div className="h-[300px] w-[300px] bg-primary_light flex justify-center items-center flex-col">
          <span className="font-bold text-lg">Registered Teachers</span>
          <span className="font-bold text-6xl">{teachersCount}</span>
        </div>

        {/* Registered Parents */}
        <div className="h-[300px] w-[300px] bg-primary_light  flex justify-center items-center flex-col">
          <span className="font-bold text-lg">Registered Parents</span>
          <span className="font-bold text-6xl">{parentsCount}</span>
        </div>

        {/* Registered Student */}
        <div className="h-[300px] w-[300px] bg-primary_light  flex justify-center items-center flex-col">
          <span className="font-bold text-lg">Registered Students</span>
          <span className="font-bold text-6xl">{studentsCount}</span>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
