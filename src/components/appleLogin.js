import React from 'react';
import { AppleIcon } from '../icons';
const AppleLoginButton = () => {
    const handleClick = () => {
        console.log('Feature incoming!');
    }
    return (
        <button onClick={handleClick} className='flex justify-center items-center flex-row p-1 bg-white rounded-xl'>
            <AppleIcon />
            <span className=' mr-4 text-sectext font-thin'>Sign in with Apple</span>
        </button>

    )
}
export default AppleLoginButton;