import React from "react";
import NavBar from "../components/navBar";

const Dashboard = () => {
    return (
        <div className="w-screen h-screen flex bg-lightgray p-10 ">
            <div className="w-1/6">
                <NavBar currentScreen={"Dashboard"} />
            </div>
            <div className="flex flex-row w-5/6 px-10">
                <div className="flex flex-col">
                    <div className="text-3xl font-bold" >
                        Dashboard
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;