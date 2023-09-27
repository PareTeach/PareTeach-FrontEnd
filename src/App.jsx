import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  Communication,
  Dashboard,
  Login,
  Logout,
  ReportAndAnalysis,
  Settings,
  UserManagement,
  Welcome,
} from "../src/pages/index";
import { TopNavbar, SideNavbar } from "../src/components/index";

export default function App() {
  const user = true;

  return (
    <div className="bg-black h-screen flex">
      {/* side bar */}
      {user && <SideNavbar />}
      {/* content and top bar */}
      <div className="bg-blue-400 w-full">
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
          <Route
            path="/user-management"
            element={user ? <UserManagement /> : <Navigate to={"/"} />}
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
        </Routes>
      </div>
    </div>
  );
}
