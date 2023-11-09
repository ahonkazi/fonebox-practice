import { SectionTitle } from '@/components/typography/Typography'
import React from 'react'

const AboutUsRight = () => {
    return (
        <div className='relative w-full '>
            <div className="">
                <SectionTitle subTitle='Who Are We' title='About Us' />
            </div>
            <p className='text-Gray text-center text-sm md:text-base lg:text-start leading-[160%] mt-4 2xl:mt-[30px] 2xl:text-[20px]'>
                Fonebox Automation Helps Manufacturers Solve Challenging Problems,<br className='hidden lg:block' /> Introduces New Industrial DataOps Solution. <br className='hidden lg:block' />
                Fonebox Automation Reports Fourth Quarter and Full Year 2023 Results;<br className='hidden lg:block' /> Introduces Fiscal 2024 Guidance. <br className='hidden lg:block' />
                New MagneMover LITE Operator Runtime Tool from Fonebox Automation <br className='hidden lg:block' /> Empowers People with Real-Time Data. We provide best automation products.
            </p>
            
            <div className="mt-6 flex justify-center lg:block 2xl:mt-[40px]">
                <div className="relative w-fit">
                    <button className='px-20 duration-300 hover:text-Coral hover:bg-transparent border border-Coral py-2.5 bg-Coral text-white rounded'>See more</button>
                    <div className="absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%]">
                        <svg className='h-[50px] 2xl:h-[65px]' viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32.5" cy="32.5" r="32.5" fill="#FF6534" fillOpacity="0.24" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsRight