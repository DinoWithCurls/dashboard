import React from 'react';

const SaveButton = ({buttonAction}) => {
    return (
        <button onClick={buttonAction} className='flex justify-center items-center w-1/3 p-2 rounded-lg bg-save text-white font-bold'>
            Save
        </button>
    )
}

export default SaveButton;