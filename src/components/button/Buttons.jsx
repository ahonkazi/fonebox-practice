import React from 'react'

export const ButtonSwiperPrev = () => {
    return (
        <button className='h-[50px] w-[60px] flex items-center justify-center rounded border-[1.5px] duration-200 border-CoralLight'  >
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.45427 15.5779L13.5534 23.677C13.9195 24.0431 13.9195 24.6367 13.5534 25.0028C13.1873 25.3689 12.5937 25.3689 12.2276 25.0028L2.52987 15.3051C2.16376 14.939 2.16374 14.3454 2.52987 13.9793L12.4657 3.96575C12.8318 3.59963 13.4254 3.59963 13.7916 3.96575C14.1577 4.33186 14.1577 4.92546 13.7916 5.29157L5.45794 13.7029L27.1209 13.7038C27.6387 13.7038 28.0584 14.1236 28.0584 14.6413C28.0584 15.1591 27.6386 15.5788 27.1209 15.5788L5.45427 15.5779Z" fill="#FF6534" />
            </svg>
        </button>
    )
}

export const ButtonSwiperNext = () => {
    return (
        <button className='h-[50px] w-[60px] flex items-center justify-center rounded border-[1.5px] duration-200 border-CoralLight'>
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5457 15.5779L16.4466 23.677C16.0805 24.0431 16.0805 24.6367 16.4466 25.0028C16.8127 25.3689 17.4063 25.3689 17.7724 25.0028L27.4701 15.3051C27.8362 14.939 27.8363 14.3454 27.4701 13.9793L17.5343 3.96575C17.1682 3.59963 16.5746 3.59963 16.2084 3.96575C15.8423 4.33186 15.8423 4.92546 16.2084 5.29157L24.5421 13.7029L2.87911 13.7038C2.36134 13.7038 1.94161 14.1236 1.94161 14.6413C1.94163 15.1591 2.36136 15.5788 2.87911 15.5788L24.5457 15.5779Z" fill="#FF6534" />
            </svg>
        </button>
    )
}