import React from 'react'
import FilterSearch from './FilterSearch'
import FilterCategories from './FilterCategories'
import FilterTags from './FilterTags'

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

