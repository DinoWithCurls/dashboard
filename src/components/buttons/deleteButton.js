import React from 'react';

const DeleteButton = ({buttonAction}) => {
    return (
        <button onClick={buttonAction} className='text-delete bg-white border-2 border-delete p-2 w-full rounded-lg font-bold'>
            Delete My Account
        </button>
    )
}

export default DeleteButton;