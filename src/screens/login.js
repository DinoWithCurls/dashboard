import React from "react";
import GoogleLoginButton from "../components/googleLogin";
const Login = ({setLogin}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            {console.log('Inside Login Screen')}
            <div>Login Screen</div>
            <button onClick={setLogin}>Login</button>
            <GoogleLoginButton />
        </div>
    )

}

export default Login;