import React from "react";
import NavBar from "../components/navBar";
import Header from "../components/header";

import { TotalTransactionIcon, MultipleUserIcon, RevenueIcon, LikesIcon } from "../icons";



const BubbleData = [
  {
    id: 1,
    name: "Total Revenues",
    bg: "revenue",
    value: "$2,129,430",
    icon: <RevenueIcon />,
  },
  {
    id: 2,
    name: "Total Transactions",
    bg: "transaction",
    value: "1,520",
    icon: <TotalTransactionIcon />,
  },
  {
    id: 3,
    name: "Total Likes",
    bg: "likes",
    value: "9,721",
    icon: <LikesIcon />,
  },
  {
    id: 4,
    name: "Total Users",
    bg: "users",
    value: "892",
    icon: <MultipleUserIcon />,
  },
];

const Bubble = ({ itemName, itemValue, itemIcon, itemBackground }) => {
  return (
    <div
      className={`${itemBackground} rounded-xl flex flex-col w-[20%] h-fit p-3`}
    >
      <div className="ml-auto mr-3">{itemIcon}</div>
      <div className="text-lg">{itemName}</div>
      <div className="text-3xl font-bold">{itemValue}</div>
    </div>
  );
};

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
        <div className="flex justify-center items-center h-9/10">
          <div className="flex flex-col w-full h-full justify-between">
            <div className="flex flex-row justify-between w-full pt-10">
              <Bubble
                itemName={BubbleData[0].name}
                itemBackground={"bg-revenue"}
                itemValue={BubbleData[0].value}
                itemIcon={BubbleData[0].icon}
              />
              <Bubble
                itemName={BubbleData[1].name}
                itemBackground={"bg-transaction"}
                itemValue={BubbleData[1].value}
                itemIcon={BubbleData[1].icon}
              />
              <Bubble
                itemName={BubbleData[2].name}
                itemBackground={"bg-likes"}
                itemValue={BubbleData[2].value}
                itemIcon={BubbleData[2].icon}
              />
              <Bubble
                itemName={BubbleData[3].name}
                itemBackground={"bg-users"}
                itemValue={BubbleData[3].value}
                itemIcon={BubbleData[3].icon}
              />
            </div>
            <div className="pt-5">
              <div className="bg-white rounded-xl p-5">Graph</div>
            </div>
            <div className="flex flex-row justify-between pt-5">
              <div className="bg-white rounded-xl h-fit w-[38%] p-5">
                Pie Chart
              </div>
              <div className="bg-white rounded-xl h-fit w-[58%] p-5">
                Messages
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
