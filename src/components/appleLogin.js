import React from 'react';

const AppleLoginButton = () => {
    const handleClick = () => {
        console.log('Feature incoming!');
    }
    return (
        <button onClick={handleClick} className='flex justify-center items-center flex-row p-1 bg-white rounded-xl'>
            <img src={require('../icons/apple.png')} alt='apple' className='ml-2 mr-2 h-5 w-5' />
            <span className=' mr-4 text-sectext font-thin'>Sign in with Apple</span>
        </button>

    )
}
export default AppleLoginButton;