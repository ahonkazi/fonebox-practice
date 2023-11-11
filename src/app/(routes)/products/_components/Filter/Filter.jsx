"use client"
import React, { useContext, useEffect } from 'react'
import FilterSearch from './FilterSearch'
import FilterCategories from './FilterCategories'
import FilterTags from './FilterTags'
import { AiOutlineClose } from 'react-icons/ai'
import { GetThemeContext } from '@/context/ThemeContext'
const Filter = () => {
    return (
        <div className='w-[300px] hidden lg:block shrink-0 lg:static 2xl:w-[324px]'>
            <FilterSearch />
            <FilterCategories />
            <FilterTags />
        </div>
    )
}

export default Filter

export const FilterSidebar = () => {
    const themeContext = useContext(GetThemeContext)
    return (
        <>
            <div className={`bg-white ${themeContext.filterSidebarStatus ? 'translate-x-0' : 'translate-x-full'} duration-300 lg:hidden z-[200] fixed top-0 right-0 h-full flex flex-col w-full sm:w-[340px]`}>
                <div className="shrink-0 py-5 px-[25px]">
                    <button onClick={() => themeContext.setFilterSidebarStatus(false)}>
                        <AiOutlineClose className='text-gray-300 text-xl duration-200 hover:text-Coral' />
                    </button>
                </div>
                <div className="overflow-y-scroll h-full">
                    <FilterCategories />
                    <FilterTags />
                </div>
            </div>
            {
                themeContext.filterSidebarStatus && (
                    <div className='bg-black lg:hidden bg-opacity-70 z-[190] fixed top-0 right-0 h-full w-full'>

                    </div>
                )
            }

        </>
    )
}