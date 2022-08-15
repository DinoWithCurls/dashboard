import React from 'react';

const AppleLoginButton = () => {
    const handleClick = () => {
        console.log('Feature incoming!');
    }
    return (
        <button onClick={handleClick} className='flex justify-center items-center flex-row p-1 border rounded-full'>
            <img src={require('../icons/apple.png')} alt='apple' className='ml-1 h-5 w-5' />
            <span className='ml-1 mr-2 text-gray-400 font-thin'>Sign in with Apple</span>
        </button>

    )
}
export default AppleLoginButton;