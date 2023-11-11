import React from 'react'

const FilterHeader = ({ children }) => {
    return (
        <div className="filter-header px-[25px] pb-[14px] 2xl:px-[44px] border-b border-[#f0f0f0] 2xl:pb-[28px]">
            <h3 className='text-[22px] 2xl:text-[28px] font-medium'>{children}</h3>
        </div>)
}

export default FilterHeader