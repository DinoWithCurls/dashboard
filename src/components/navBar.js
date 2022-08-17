import React from "react";

const { Link } = require("react-router-dom");

const DashboardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
      />
    </svg>
  );
};
const TransactionIcon = () => {
  return (
    <div className="h-5 w-5">
      <img src={require("../icons/transaction_icon.png")} alt="trnsicon" />
    </div>
  );
};

const ScheduleIcon = () => {
  return (
    <div className="h-5 w-5">
      <img src={require("../icons/schedule_icon.png")} alt="schicon" />
    </div>
  );
};

const UserIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const SettingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
};

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
      <div className="text-white text-sm flex flex-col mb-0">
        <span>Help</span>
        <span>Contact Us</span>
      </div>
    </div>
  );
};

export default NavBar;
