import React from "react";
import GoogleLoginButton from "../components/googleLogin";
import { useNavigate } from "react-router-dom";
import AppleLoginButton from "../components/appleLogin";
import BaseInput from "../components/inputs/baseInput";
import ProtectedInput from "../components/inputs/protectedInput";
import AuthButton from "../components/buttons/authButton";
const Login = ({ setLogin }) => {
    const navigate = useNavigate();
    const onPressRegister = () => {
        navigate('/register')
    }
  return (
    <div className="flex flex-row h-screen w-screen items-center">
      <div className=" flex w-2/5 bg-themeblue h-screen justify-center items-center text-white font-extrabold text-7xl">
        Dash.
      </div>
      <div className="flex flex-col w-3/5 h-full justify-center items-center bg-lightgray">
        <div className="w-1/3">
          <div className="flex flex-col mb-4">
            <span className="text-4xl font-bold">Sign In</span>
            <span className="text-lg font-medium">Sign in to your account</span>
          </div>
          <div className="flex flex-row justify-between mb-4">
            <GoogleLoginButton />
            <AppleLoginButton />
          </div>
          <div className="w-full bg-white p-5 rounded-xl">
            <div className="mb-4">
              <span className="font-normal mt-2">Email Address</span>
              <BaseInput placeholderText={"Email"} />
            </div>
            <div className="mb-4">
              <span className="font-normal mt-2">Password</span>
              <ProtectedInput />
            </div>
            <div className="mb-4">
              <span className=" py-2 text-save font-normal">
                Forgot Password?
              </span>
            </div>
            <AuthButton buttonAction={setLogin}>Sign In</AuthButton>
          </div>
          <div className=" flex mt-4 justify-center items-center">
            <div className="text-sectext font-normal">Don't have an account? <span className="text-save font-normal" onClick={onPressRegister}>Register here</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
