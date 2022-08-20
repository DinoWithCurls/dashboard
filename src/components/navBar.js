import React from "react";
import { TransactionIcon, DashboardIcon, ScheduleIcon, UserIcon, SettingIcon  } from "../icons";
const { Link } = require("react-router-dom");

const NavBarData = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    name: "Transactions",
    link: "/error",
    icon: <TransactionIcon />,
  },
  {
    id: 3,
    name: "Schedules",
    link: "/error",
    icon: <ScheduleIcon />,
  },
  {
    id: 4,
    name: "Users",
    link: "/users",
    icon: <UserIcon />,
  },
  {
    id: 5,
    name: "Settings",
    link: "/settings",
    icon: <SettingIcon />,
  },
];

const NavBar = ({ currentScreen }) => {
  return (
    <div className="flex flex-col w-full bg-themeblue rounded-2xl h-full p-10">
      <div className="mt-5 font-bold text-white text-4xl">Dash.</div>
      {/*NavBar items*/}
      <ul className="pt-8 flex flex-col py-96">
        {NavBarData.map((item, index) => {
          return (
            <li key={index} className="text-white mb-2">
              <div>
                <Link to={item.link}>
                  <div className={`${currentScreen===item.name ? "font-bold": "font-normal"} inline-flex items-center p-3`}>
                    {item.icon} &nbsp;&nbsp;<span>{item.name}</span>
                  </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="text-white text-sm flex flex-col mt-auto">
        <span>Help</span>
        <span>Contact Us</span>
      </div>
    </div>
  );
};

export default NavBar;
