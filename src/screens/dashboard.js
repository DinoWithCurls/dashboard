import React from "react";
import NavBar from "../components/navBar";
import Header from "../components/header";
import PieComponent from "../components/pie";

import {
  TotalTransactionIcon,
  MultipleUserIcon,
  RevenueIcon,
  LikesIcon,
  RightIcon,
  DownIcon,
} from "../icons";

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

const PieData = [
  { name: "Basic Tees", value: 55 },
  { name: "Super Hoodies", value: 14 },
  { name: "Custom Short Pants", value: 31 },
];

const PieStatColors = [ 'border-piegreen', 'border-pieyellow', 'border-piered']

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

const PieStats = ({ itemName, itemValue, itemDot }) => {
  return (
    <div className="flex flex-col">
      <div className="inline-flex items-center">
        <div
          className={`${itemDot} border-4 w-2 h-2 rounded-full mr-2`}
        ></div>
        <div className="font-bold">{itemName}</div>
      </div>
      <div className="text-sectext text-sm px-4">{itemValue}</div>
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
            <div className="flex flex-row justify-between pt-5 h-full">
              <div className="flex flex-col bg-white rounded-xl h-fit w-[48%] p-5">
                <div className="flex flex-row justify-between">
                  <div>
                    <div className="font-bold text-xl">Top Products</div>
                  </div>
                  <div className="inline-flex items-center text-sectext">
                    <div>May - June 2021</div>
                    <DownIcon />
                  </div>
                </div>
                <div className="inline-flex items-center justify-end">
                  <div className="pt-2 w-[100%] h-[100%]">
                    <PieComponent data={PieData} />
                  </div>
                  <div className="flex flex-col w-full">
                    <PieStats
                      itemName={PieData[0].name}
                      itemValue={PieData[0].value}
                      itemDot={PieStatColors[0]}
                    />
                    <PieStats
                      itemName={PieData[1].name}
                      itemValue={PieData[1].value}
                      itemDot={PieStatColors[1]}
                    />
                    <PieStats
                      itemName={PieData[2].name}
                      itemValue={PieData[2].value}
                      itemDot={PieStatColors[2]}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col rounded-xl h-full w-[48%] p-5">
                <div className="flex flex-row justify-between">
                  <div>
                    <div className="font-bold text-xl">Today's Schedule</div>
                  </div>
                  <div className="inline-flex items-center text-sectext">
                    <div>See All</div>
                    <RightIcon />
                  </div>
                </div>
                <div className="pt-10">
                  <div className="flex flex-col border-l-4 border-lightgreen pl-2">
                    <div className="text-lg">
                      Meeting with suppliers from Kuta Bali
                    </div>
                    <div className="text-sm text-sectext">14:00-15:00</div>
                    <div className="text-sm text-sectext">
                      at Sunset Road, Kuta, Bali
                    </div>
                  </div>
                </div>
                <div className="pt-5">
                  <div className="flex flex-col border-l-4 border-borderblue pl-2">
                    <div className="text-lg">
                      Check operation at Giga Factory 1
                    </div>
                    <div className="text-sm text-sectext">18:00-20:00</div>
                    <div className="text-sm text-sectext">
                      at Central Jakarta
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
