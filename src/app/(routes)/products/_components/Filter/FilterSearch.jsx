import React from 'react'
import { FiSearch } from 'react-icons/fi'

const FilterSearch = () => {
    return (
        <div className=''>
            <div className="search-box rounded-md md:py-[23px] md:px-[22px] 2xl:py-[26px] 2xl:px-[25px] bg-white shadow-box">
                <div className="input-item flex rounded overflow-hidden">
                    <input type="text" className='bg-MidGray text-Gray w-full py-[13px] px-[18px] outline-none' />
                    <button className='shrink-0 bg-Coral px-5 text-white text-lg'>
                        <FiSearch />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilterSearch