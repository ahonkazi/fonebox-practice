import Image from 'next/image'
import React from 'react'
import { RatingStar } from '../icons/Icon'
import img from './assets/product-1.png'
const ProductCard = () => {
    return (
        <div className='bg-white duration-300 hover:shadow-shadow1 rounded-3xl cursor-pointer select-none px-6 py-6 2xl:py-[33px] 2xl:px-[43px]'>
            <div className="relative py-4 group  px-4 rounded-3xl">
                <Image className='w-full object-cover' alt={''} src={img} />
       
            </div>
            <div className="mt-5">
                <h2 className='product-title leading-[120%] text-lg lg:text-2xl font-medium'>S8VK-C06024 Omron</h2>
                <p className='product-text mt-2 leading-[160%] text-base lg:text-lg text-Gray'>
                    Fonebox Automation  provide best automation products.
                </p>
                <div className="flex mt-4 items-center justify-between">
                    <div className="">
                        <RatingStar />
                    </div>
                    <div className="flex items-center">
                        <p className='leading-[120%] text-lg lg:text-2xl font-medium text-Coral'>105$</p>
                        <p className='text-Coral text-sm'>(20% Off)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard