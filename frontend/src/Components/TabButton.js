import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white border-b border-green-500' : 'text-[#568203] ' 
    return ( 
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-[#808203] hover:border-b hover:border-green-500 ${buttonClasses} `}> 
            {children}
            </p>
        </button>
    );
}

export default TabButton;