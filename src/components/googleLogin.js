import React, {useEffect} from "react";
import { useGoogleLogin } from "react-google-login";
import { gapi } from 'gapi-script'
import { refreshTokenSetup } from '../utils/refreshTokenSetup';
import { GoogleIcon } from "../icons";
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID + '.apps.googleusercontent.com';

const GoogleLoginButton = ({setLogin}) => {
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                client_id: CLIENT_ID,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient)
    })

    const onSuccess = (res) => {
        console.log('Success');
        refreshTokenSetup(res);
        setLogin(true);
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
        <button onClick={signIn} className='flex justify-center items-center flex-row p-1 rounded-xl bg-white box-shadow'>
            <GoogleIcon />
            <span className=" mr-4 text-sectext font-thin">Sign in with Google</span>
        </button>
    )
}

export default GoogleLoginButton;
