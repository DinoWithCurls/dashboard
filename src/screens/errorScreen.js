import React from "react";

const ErrorScreen = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={require('../images/404.jpg')} alt="404" className="w-1/2" />
            <div className=" text-4xl font-bold text-sectext mb-2">This page will be added in the future.</div>
        </div>
    )
}

export default ErrorScreen;