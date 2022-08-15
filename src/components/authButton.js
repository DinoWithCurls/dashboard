import React from 'react';

const AuthButton = ({buttonAction, children}) => {
    return (
        <button onClick={buttonAction} className='flex justify-center items-center bg-themeblue text-white w-40 p-2 font-bold rounded-lg '>
            {children}
        </button>
    )
}

export default AuthButton;