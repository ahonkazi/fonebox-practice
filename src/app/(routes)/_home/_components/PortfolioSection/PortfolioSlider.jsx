"use client"
import React, { useEffect, useRef } from 'react'
import PortfolioItem from './PortfolioItem'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
// import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
const PortfolioSlider = () => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const updateSwiper = (swiper) => {
        // setTimeout(() => {
        //     swiper.params?.navigation.prevEl = navigationPrevRef.current
        //     swiper.params?.navigation.nextEl = navigationNextRef.current
        //     swiper.navigation?.destroy()
        //     swiper.navigation?.init()
        //     swiper.navigation?.update()
        // })
    }
    return (
        <div className="wrapper mt-wrapper ">
            <div className="relative ">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}

                    navigation={{
                        // Both prevEl & nextEl are null at render so this does not work
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },

                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1800: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Navigation]}
                    loop={true}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}

                >

                    <SwiperSlide>
                        <PortfolioItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PortfolioItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PortfolioItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PortfolioItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PortfolioItem />
                    </SwiperSlide>


                </Swiper>
                <div className="absolute -translate-x-[50%] sm:translate-x-[50%] xs:translate-x-[100%] -translate-y-[50%] right-full bottom-0">
                    <svg className='h-[60px] 2xl:h-[95px]' viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="47.5" cy="47.5" r="47.5" fill="#FF6534" fillOpacity="0.24" />
                    </svg>
                </div>
            </div>
            <div className="flex gap-4 justify-center ">
                <button className='h-[50px] w-[60px] flex items-center justify-center rounded border-[1.5px] duration-200 border-CoralLight' ref={navigationPrevRef}>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.45427 15.5779L13.5534 23.677C13.9195 24.0431 13.9195 24.6367 13.5534 25.0028C13.1873 25.3689 12.5937 25.3689 12.2276 25.0028L2.52987 15.3051C2.16376 14.939 2.16374 14.3454 2.52987 13.9793L12.4657 3.96575C12.8318 3.59963 13.4254 3.59963 13.7916 3.96575C14.1577 4.33186 14.1577 4.92546 13.7916 5.29157L5.45794 13.7029L27.1209 13.7038C27.6387 13.7038 28.0584 14.1236 28.0584 14.6413C28.0584 15.1591 27.6386 15.5788 27.1209 15.5788L5.45427 15.5779Z" fill="#FF6534" />
                    </svg>
                </button>
                <button className='h-[50px] w-[60px] flex items-center justify-center rounded border-[1.5px] duration-200 border-CoralLight' ref={navigationNextRef}>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5457 15.5779L16.4466 23.677C16.0805 24.0431 16.0805 24.6367 16.4466 25.0028C16.8127 25.3689 17.4063 25.3689 17.7724 25.0028L27.4701 15.3051C27.8362 14.939 27.8363 14.3454 27.4701 13.9793L17.5343 3.96575C17.1682 3.59963 16.5746 3.59963 16.2084 3.96575C15.8423 4.33186 15.8423 4.92546 16.2084 5.29157L24.5421 13.7029L2.87911 13.7038C2.36134 13.7038 1.94161 14.1236 1.94161 14.6413C1.94163 15.1591 2.36136 15.5788 2.87911 15.5788L24.5457 15.5779Z" fill="#FF6534" />
                    </svg>
                </button>
            </div>
        </div>

    )
}

export default PortfolioSlider