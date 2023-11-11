"use client"
import React, { useContext, useState } from 'react'
import FilterHeader from './FilterHeader'
import { GetProductContext } from '@/context/ProductContext'

const FilterTags = () => {
    const productContext = useContext(GetProductContext);
    const [selectedTags, setSelectedTags] = useState([]);
    const add = (item) => {
        if (!selectedTags.includes(item)) {
            setSelectedTags([...selectedTags, item]);
        } else {
            const newList = selectedTags.filter((i) => i !== item);
            setSelectedTags(newList);

        }
    }
    return (
        <div className='filter-item mt-4 lg:mt-[40px] xl:mt-[50px] 2xl:mt-[75px] lg:shadow-shadowBox'>
            <FilterHeader>Tags</FilterHeader>
            <ul className='pt-[14px] flex gap-2 flex-wrap 2xl:pt-[30px] px-[25px]  2xl:px-[44px]'>
                {
                    productContext.tags?.map((item, index) =>
                        <li onClick={() => add(index)} key={index} className={`select-none  border rounded-sm cursor-pointer ${selectedTags.includes(index) ? 'bg-Coral text-white border-Coral' : 'text-[#8b8b8b]  border-[#8b8b8b]'} hover:border-Coral duration-200 hover:bg-Coral hover:text-white font-normal text-sm px-2 py-2`}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default FilterTags