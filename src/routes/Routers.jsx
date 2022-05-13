import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";

function Routers() {
  const navigate = useNavigate();
  const loginData = JSON.parse(localStorage.getItem("login"));

  useEffect(() => {
    if (!loginData) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<Dashboard />}
        index
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="*"
        element={<Navigate to="dashboard" />}
      />
    </Routes>
  );
}

export default Routers;
