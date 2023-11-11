"use client"
import { GetProductContext } from '@/context/ProductContext';
import React, { useContext } from 'react'
import { BiChevronRight } from 'react-icons/bi';
import FilterHeader from './FilterHeader';
const FilterCategories = () => {
    const productContext = useContext(GetProductContext);
    return (
        <div className='filter-item'>
            <FilterHeader>Categories</FilterHeader>
            {
                productContext.categories?.map((category, index) =>
                    <div key={index} className="filter-list lg:pt-[14px] 2xl:pt-[30px] lg:px-[25px]  2xl:px-[44px]">
                        <div className="">
                            <h3 className='text-[18px] 2xl:text-[24px] font-medium'>{category?.name}</h3>
                            <div className="line mt-2 2xl:mt-[12px] w-full h-[2px] 2xl:h-[2.5px] bg-[#f0f0f0] rounded-full relative after:content-[''] after:absolute after:left-0 after:top-0 after:w-[25%] after:rounded-full after:h-full after:bg-Blue"></div>
                        </div>
                        <ul className='mt-[14px] 2xl:mt-[30px] gap-y-2 flex flex-col'>
                            <li className='text-sm flex justify-between cursor-pointer text-Gray duration-200 hover:text-Blue items-center'>
                                <span>
                                    Whats New In Hardware
                                </span>
                                <BiChevronRight className='text-lg' />
                            </li>
                            {
                                category.subCategories?.map((subCategory, indexSub) =>
                                    <li key={indexSub} className='text-sm flex justify-between cursor-pointer text-Gray duration-200 hover:text-Blue items-center'>
                                        <span>
                                            {subCategory.name}
                                        </span>
                                        <BiChevronRight className='text-lg' />
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                )
            }


        </div>
    )
}

export default FilterCategories