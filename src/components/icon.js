import React from 'react';

const Icon = ({iconUrl, iconView}) => {
    const smallSize = 'h-10 w-10';
    const largeSize = 'h-24 w-24';
    return (
        <div>
            <img src={iconUrl} alt='icn' className={`${iconView ==='Large' ? largeSize : smallSize} object-cover rounded-full`} />
        </div>
    )
}

export default Icon;