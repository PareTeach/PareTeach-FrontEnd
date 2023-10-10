import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  Admin,
  Communication,
  Dashboard,
  DataManagement,
  Login,
  Logout,
  Parent,
  ReportAndAnalysis,
  Settings,
  SignUp,
  Student,
  Teacher,
  UserManagement,
  Welcome,
} from "../src/pages/index";
import {
  TopNavbar,
  SideNavbar,
  NavUserManagement,
} from "../src/components/index";

export default function App() {
  const user = true;

  return (
    <div className="bg-black h-screen flex relative">
      {/* side bar */}
      {user && <SideNavbar />}
      {/* content and top bar */}
      <div className="bg-background_light w-full relative">
        <TopNavbar />
        <Routes>
          <Route
            path="/"
            element={!user ? <Welcome /> : <Navigate to={"/dashboard"} />}
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to={"/"} />}
          />
          <Route path="/user-management" element={<NavUserManagement />}>
            <Route path="Admin" element={<Admin />} />
            <Route path="Teacher" element={<Teacher />} />
            <Route path="Student" element={<Student />} />
            <Route path="Parent" element={<Parent />} />
          </Route>
          <Route
            path="/data-management"
            element={user ? <DataManagement /> : <Navigate to={"/"} />}
          />
          <Route
            path="/communication"
            element={user ? <Communication /> : <Navigate to={"/"} />}
          />
          <Route
            path="/report-analysis"
            element={user ? <ReportAndAnalysis /> : <Navigate to={"/"} />}
          />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Navigate to={"/"} />}
          />
          <Route
            path="/logout"
            element={user ? <Logout /> : <Navigate to={"/"} />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to={"/"} />}
          />
        </Routes>
      </div>
    </div>
  );
}
