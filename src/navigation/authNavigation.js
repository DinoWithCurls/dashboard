import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login, Register } from "../screens";

const AuthNavigation = ({ setLogin }) => {
  const navigate = useNavigate();
  const enterProtectedView = () => {
    setLogin();
    navigate('/dashboard');
  }
  return (
    <Routes>
      <Route path="/" element={<Login setLogin={enterProtectedView} />} />
      <Route path="/register" element={<Register enter={setLogin} />} />
    </Routes>
  );
};

export default AuthNavigation;
