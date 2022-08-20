import React from "react";

import NavBar from "../components/navBar";
import Header from "../components/header";
import Icon from "../components/icon";

import BaseInput from "../components/inputs/baseInput";
import DateInput from "../components/inputs/dateInput";
import ProtectedInput from "../components/inputs/protectedInput";

import SaveButton from "../components/buttons/saveButton";
import DeleteButton from "../components/buttons/deleteButton";
import SwitchButton from "../components/buttons/switchButton";
import ChangeButton from "../components/buttons/changeButton";

const Settings = () => {
  return (
    <div className="w-screen h-screen flex bg-lightgray p-5 ">
      <div className="w-1/6">
        <NavBar currentScreen={"Settings"} />
      </div>
      <div className="flex flex-col w-5/6 h-full px-10">
        <div>
          <Header screenName={"Settings"} />
        </div>
        <div className="flex pt-8 h-full justify-between">
          <div className="flex w-full h-4/6">
            <div className="flex rounded-xl flex-col w-[40%] bg-white p-10 mr-auto">
              <div className="text-2xl font-bold">Profile</div>
              <div className=" flex flex-row pt-5">
                <div className=" flex flex-col w-1/3">
                  <div className="w-full">
                    <Icon
                      iconUrl={require("../images/small.png")}
                      iconView={"Large"}
                    />
                  </div>
                  <div className="pt-2"><ChangeButton /></div>
                </div>
                <div className="w-full">
                  <div className="flex flex-row justify-between">
                    <div className="mr-1.5">
                      <span className=" font-normal mt-auto">First Name</span>
                      <BaseInput placeholderText={"First Name"} />
                    </div>
                    <div className="ml-1.5">
                      <span className=" font-normal mt-auto">Last Name</span>
                      <BaseInput placeholderText={"Last Name"} />
                    </div>
                  </div>
                  <div className="py-1.5">
                    <span className="font-normal">Date of Birth</span>
                    <DateInput />
                  </div>
                  <div className="py-1.5">
                    <span className="font-normal mt-2">Phone Number</span>
                    <BaseInput placeholderText={"Phone Number"} />
                  </div>
                  <div className="py-1.5">
                    <span className="font-normal mt-2"> Address</span>
                    <BaseInput placeholderText={"Address"} />
                  </div>
                  <div className="float-right w-1/3 py-1.5"><SaveButton /></div>
                </div>
              </div>
            </div>
            <div className="flex h-full w-[50%]">
              <div className="flex flex-col space-y-4 h-full">
                <div className="w-full rounded-xl justify-between bg-white p-10">
                  <div className="text-2xl font-bold">Account</div>
                  <div className=" bg-white rounded-xl">
                  <div className="mb-4 pt-5">
                    <span className="font-normal">Email address</span>
                    <BaseInput placeholderText={"Email"} />
                  </div>
                  <div className="mb-4">
                    <span className="font-normal mt-2">Current Password</span>
                    <ProtectedInput />
                  </div>
                  <div className="mb-7">
                    <span className="font-normal mt-2">New Password</span>
                    <ProtectedInput />
                  </div>
                  <div className="float-right w-1/3"><SaveButton /></div>
                </div>
                </div>
                <div className="w-full rounded-xl bg-white p-10 flex flex-col">
                  <div className="text-2xl font-bold">Security</div>
                  <div className="pt-5 flex justify-between">
                    <div>2-Step Verification</div>
                    <div><SwitchButton /></div>
                  </div>
                </div>
                <div className="w-full rounded-xl bg-white p-10">
                  <div className="text-2xl font-bold text-delete">
                    Danger Zone
                  </div>
                  <div className="pt-5"><DeleteButton /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
