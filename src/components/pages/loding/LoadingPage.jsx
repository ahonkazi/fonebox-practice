import React from 'react'
import './loading.scss'
const LoadingPage = () => {
    return (
        <div className='fixed z-[1000] loadingpage top-0 bg-Blue left-0 w-full h-full flex items-center justify-center'>


            <span className="back">
                <span className='px-1 md:leading-[100px] md:px-[15px] text-[24px] sm:text-[36px]'>f</span>
                <span className='px-1 md:leading-[100px] md:px-[15px] text-[24px] sm:text-[36px]'>o</span>
                <span className='px-1 md:leading-[100px] md:px-[15px] text-[24px] sm:text-[36px]'>n</span>
                <span className='px-1 md:leading-[100px] md:px-[15px] text-[24px] sm:text-[36px]'>e</span>
                <span className='px-1 md:leading-[100px] md:px-[15px] text-[24px] sm:text-[36px]'>b</span>
                <span className='px-1 md:leading-[100px] md:px-[15px] text-[24px] sm:text-[36px]'>o</span>
                <span className='px-1 md:leading-[100px] md:px-[15px] text-[24px] sm:text-[36px]'>x</span>
                <div className="line"></div>
            </span>


        </div>
    )
}

export default LoadingPage