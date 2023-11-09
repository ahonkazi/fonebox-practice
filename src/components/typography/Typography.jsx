import React from 'react'

export const SectionTitle = ({ subTitle = 'Sub title here', title = 'Title Here', nextLine = null }) => {
    return (
        <div className="section-title flex flex-col items-center lg:block text-center lg:text-start w-full font-Inter lg:w-fit">
            <p className='text-Blue xl:text-lg 2xl:text-xl font-medium leading-[160%] '>{subTitle}</p>
            <div className="lg:mt-2 2xl:mt-3 w-fit relative">
                <h1 className='text-[32px] lg:text-[40px] xl:text-[48px] font-medium 2xl:text-[56px] leading-[130%] '>{title}</h1>
                <div className="absolute top-[50%] -translate-y-[100%] left-full">
                    <svg className='h-[32px] lg:h-[35px] 2xl:h-[42px]' viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M25.2853 39.1941C28.9138 38.1669 32.7127 37.6487 36.3978 37.174C37.1915 37.0745 37.9284 37.6299 37.9851 38.4123C38.0985 39.1953 37.5313 39.9113 36.7942 40.0109C33.2225 40.4678 29.5377 40.9569 26.0793 41.9458C25.3423 42.1602 24.5482 41.7187 24.3214 40.9592C24.0946 40.2002 24.5483 39.4092 25.2853 39.1941Z" fill="#FF6534" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.2875 24.6302C20.127 18.6185 26.7036 13.3806 32.4298 7.20762C32.94 6.6311 33.8471 6.60021 34.4141 7.13841C34.981 7.67718 35.0375 8.58314 34.4705 9.15967C28.7444 15.3504 22.1678 20.6055 16.3283 26.6349C15.7613 27.1977 14.8544 27.2057 14.2875 26.6521C13.7773 26.099 13.7206 25.193 14.2875 24.6302Z" fill="#FF6534" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.34502 1.50764C3.17494 4.94846 3.00519 8.38929 2.8351 11.8307C2.8351 12.6188 2.15444 13.2274 1.36071 13.1891C0.566989 13.1502 0.000375509 12.4793 0.000375509 11.6906C0.170459 8.24402 0.340211 4.79804 0.510295 1.35206C0.566989 0.563922 1.24743 -0.0406252 2.04116 0.00227078C2.77819 0.0451668 3.40172 0.720066 3.34502 1.50764Z" fill="#FF6534" />
                    </svg>

                </div>
            </div>
            {nextLine && (
                <h1 className='text-[32px] lg:text-[40px] xl:text-[48px] font-medium 2xl:text-[56px] leading-[130%] '>{nextLine}</h1>

            )}
        </div>)
}

