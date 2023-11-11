"use client"
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ButtonSwiperNext, ButtonSwiperPrev } from '@/components/button/Buttons';
import BlogCard from '@/components/cards/BlogCard';
const PortfolioSlider = () => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const swiperRef = useRef(null);

    return (
        <div className="wrapper mt-wrapper ">
            <div className="relative ">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    ref={swiperRef}
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


                >

                    <SwiperSlide>
                        <div className="pt-[50px]">
                            <BlogCard />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pt-[50px]">
                            <BlogCard />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pt-[50px]">
                            <BlogCard />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pt-[50px]">
                            <BlogCard />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pt-[50px]">
                            <BlogCard />
                        </div>
                    </SwiperSlide>


                </Swiper>
                <div className="absolute -translate-x-[50%] sm:translate-x-[50%] xs:translate-x-[100%] -translate-y-[50%] right-full bottom-0">
                    <svg className='h-[60px] 2xl:h-[95px]' viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="47.5" cy="47.5" r="47.5" fill="#FF6534" fillOpacity="0.24" />
                    </svg>
                </div>
            </div>
            <div className="flex gap-4 justify-center ">
                <span onClick={() => swiperRef.current.swiper.slidePrev()}>
                    <ButtonSwiperPrev />
                </span>
                <span onClick={() => swiperRef.current.swiper.slideNext()}>
                    <ButtonSwiperNext />
                </span>

            </div>
        </div >

    )
}

export default PortfolioSlider