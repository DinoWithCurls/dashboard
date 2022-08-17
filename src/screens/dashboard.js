import React from "react";
import NavBar from "../components/navBar";
import Header from "../components/header";


const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex bg-lightgray p-10 ">
      <div className="w-1/6">
        <NavBar currentScreen={"Dashboard"} />
      </div>
      <div className="flex flex-col w-5/6 px-10">
        <div>
          <Header screenName={"Dashboard"} />
        </div>
        <div className="flex justify-center items-center h-9/10 text-5xl text-sectext font-bold mt-[50%]">
            Other block
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
