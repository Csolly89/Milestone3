import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active 
    ? 'text-[#D00000] border-b border-[#D00000]'
    : 'text-[#6A040F] ' 

    return ( 
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-[#D00000] hover:border-b hover:border-[#D00000] ${buttonClasses} `}> 
            {children}
            </p>
        </button>
    );
}

export default TabButton;