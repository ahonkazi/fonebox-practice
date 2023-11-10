import React from 'react'
import img1 from '../../_assets/portfolio-1.jpg';
import Image from 'next/image';
const PortfolioItem = () => {
    return (
        <div className="xs:px-[6%] sm:px-0 rounded-2xl pb-[50px]">
            <div className="select-none  portfolio-item bg-white rounded-2xl  shadow-box">
                <div className="h-[240px] xs:h-[260px] 2xl:h-[300px] rounded-2xl cursor-pointer overflow-hidden">
                    <Image className='h-full hover:scale-105 duration-300 rounded-2xl objsect-cover w-full object-center' src={img1} alt='portfolio-img' />

                </div>
                <div className="px-8 py-6 2xl:py-8 2xl:px-8">
                    <h2 className='text-lg xs:text-[20px] 2xl:text-[22px] font-medium font-Inter leading-[120%] '>Scalable automation</h2>
                    <p className='text-Gray 2xl:text-[18px] text-base xs:text-base my-1.5 font-Inter leading-[160%] '>
                        Fonebox Automation  provide best automation products.
                    </p>
                    <button className='text-Coral text-sm font-Inter xs:text-[16px] 2xl:text-[18px]'>Read More...</button>
                </div>

            </div>
        </div>
    )
}

export default PortfolioItem