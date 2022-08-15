import React from "react";
const Login = ({setLogin}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            {console.log('Inside Login Screen')}
            <div>Login Screen</div>
            <button onClick={setLogin}>Login</button>
        </div>
    )

}

export default Login;