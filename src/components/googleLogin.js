import React from "react";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from '../utils/refreshTokenSetup';
import credentials from '../utils/credentials.json';
const CLIENT_ID = credentials.web.client_id;

const GoogleLoginButton = () => {
    const onSuccess = (res) => {
        console.log('Success');
        refreshTokenSetup(res);
    }
    const onFailure = (err) => {
        console.log('Failure');
    }
    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId: CLIENT_ID,
        isSignedIn: true,
        accessType: 'offline'
    });
    return (
        <button onClick={signIn} className='flex justify-center items-center flex-row p-1 border rounded-full bg-gray-100 box-shadow'>
            <img src={require('../icons/google.png')} alt="icon" className="ml-1 h-5 w-5" />
            <span className="ml-1 mr-2 text-gray-400 font-thin">Sign in with Google</span>
        </button>
    )
}

export default GoogleLoginButton;
