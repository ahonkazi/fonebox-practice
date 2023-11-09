import React from 'react'

const ServiceItem = ({ svg = '', title = '', text = '', }) => {
    return (
        <div className="pb-[80px] xs:px-[10%] select-none sm:px-0">
            <div className="slider-item  cursor-pointer">
                <div className="item-header flex justify-center sm:justify-between items-start">
                    <div className="icon border-2 border-Coral bg-CoralLight w-fit py-4 px-6 rounded">
                        {svg}
                    </div>
                    <button className='text-sm hidden sm:block md:text-base border duration-100  active:scale-[0.989] border-CoralLight text-black px-8 py-2 rounded'>
                        Learn More
                    </button>
                </div>
                <h3 className='leading-[120%] text-center sm:text-start mt-[30px] 2xl:mt-[53px] font-medium text-lg md:text-[20px] 2xl:text-[28px]'>{title}</h3>
                <p className='mt-[10px] text-center sm:text-start 2xl:mt-[30px] text-Gray text-sm md:text-base leading-[160%]'>{text}</p>
                <div className="sm:hidden flex justify-center mt-4">

                    <button className='text-sm  md:text-base border duration-100  active:scale-[0.989] border-CoralLight text-black px-8 py-2 rounded'>
                        Learn More
                    </button>
                </div>

            </div>
        </div>

    )
}

export default ServiceItem