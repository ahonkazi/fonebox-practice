import React from 'react'

export const MenuIcon = ({ activeMenu, white = false }) => {
    return (
        <button className={`w-[26px] overflow-x-hidden h-[18px] flex flex-col justify-between `}>
            <span className={`line ${!activeMenu ? 'rotate-[45deg] translate-y-[8px] translate-x-[0px] origin-center' : ''} block h-[2px] w-full ${white ? 'bg-white' : 'bg-gray-300'} duration-300`}></span>
            <span className={`line ${!activeMenu ? '-translate-x-full' : ''} block h-[2px] w-full ${white ? 'bg-white' : 'bg-gray-300'}  duration-300`}></span>
            <span className={`line ${!activeMenu ? '-rotate-45 -translate-y-[8px] translate-x-[0px] origin-center' : ''} block h-[2px] w-full ${white ? 'bg-white' : 'bg-gray-300'} duration-300`}></span>

        </button>
    )
}

