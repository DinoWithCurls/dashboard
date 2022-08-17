import React from "react";
import { Routes, Route } from "react-router-dom";
//import NavBar from "../components";
import { Dashboard, Users, Settings, ErrorScreen } from "../screens";

const ProtectedNavigation = ({ setLogout }) => {
  return (
    <div>
      {/*<NavBar />*/}
      <Routes>
        <Route path="/error" element={<ErrorScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default ProtectedNavigation;

/* 
  

*/