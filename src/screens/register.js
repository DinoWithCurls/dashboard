import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "../components/googleLogin";
import AppleLoginButton from "../components/appleLogin";
import BaseInput from "../components/inputs/baseInput";
import ProtectedInput from "../components/inputs/protectedInput";
import AuthButton from "../components/buttons/authButton";

const Register = ({ enter }) => {
  const navigate = useNavigate();
  const onPressLogin = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-row h-screen w-screen items-center">
      <div className=" flex w-2/5 bg-themeblue h-screen justify-center items-center text-white font-extrabold text-7xl">
        Dash.
      </div>
      <div className="flex flex-col w-3/5 h-full justify-center items-center bg-lightgray">
        <div className="w-1/3">
          <div className="flex flex-col mb-4">
            <span className="text-4xl font-bold">Create an account</span>
            <span className="text-lg font-medium">
              Create an account to use dashboard
            </span>
          </div>
          <div className="flex flex-row justify-between mb-4">
            <GoogleLoginButton />
            <AppleLoginButton />
          </div>
          <div className="w-full bg-white p-5 rounded-xl">
            <div className="flex flex-row justify-between mb-4">
              <div className="mr-1.5">
                <span className=" font-normal mt-2">First Name</span>
                <BaseInput placeholderText={"First Name"} />
              </div>
              <div className="ml-1.5">
                <span className=" font-normal mt-2">Last Name</span>
                <BaseInput placeholderText={"Last Name"} />
              </div>
            </div>
            <div className="mb-4">
              <span className="font-normal mt-2">Email Address</span>
              <BaseInput placeholderText={"Email"} />
            </div>
            <div className="mb-4">
              <span className="font-normal mt-2">Password</span>
              <ProtectedInput />
            </div>
            <div className="mb-4">
              <span className="font-normal mt-2"> Confirm Password</span>
              <ProtectedInput />
            </div>
            <div className=" inline-flex mb-4 text-sectext items-center justify-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-themeblue bg-white rounded"
              />
              &nbsp;I agree the{" "}
              <span className=" text-save font-normal">
                terms and conditions
              </span>
            </div>
            <AuthButton buttonAction={enter}>Register</AuthButton>
          </div>
          <div className=" flex mt-4 justify-center items-center">
            <div className="text-sectext font-normal">
              Already have an account?{" "}
              <span className="text-save font-normal" onClick={onPressLogin}>
                Sign in here
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
