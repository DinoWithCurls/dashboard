import React from "react";

const { Link } = require("react-router-dom");

const NavBar = () => {
  <div>
    <h1>Dash.</h1>
    <nav>
      <Link to="/dashboard"><NavBarItem>Dashboard</NavBarItem></Link>
      <Link to="/error"><NavBarItem>Transactions</NavBarItem></Link>
      <Link to="/error"><NavBarItem>Schedules</NavBarItem></Link>
      <Link to="/users"><NavBarItem>Users</NavBarItem></Link>
      <Link to="/settings"><NavBarItem>Settings</NavBarItem></Link>
    </nav>
  </div>;
};

const NavBarItem = ({ children }) => {
  return (
    <div className="flex flex-row text-white">
        <div>Icon</div>
        <div>{children}</div>
    </div>
  )
};


export default NavBar;