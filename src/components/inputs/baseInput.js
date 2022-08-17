import React from 'react';

const BaseInput = ({placeholderText, onInput}) => {
    const handleChange = event =>
        onInput(event.target.value); 
    return (
        <div className='flex items-center bg-lightgray p-3 rounded-xl w-full'>
            <input className='bg-lightgray font-semibold ml-2 w-full outline-none' onChange={handleChange} placeholder={placeholderText} />
        </div>
    )
}

export default BaseInput;