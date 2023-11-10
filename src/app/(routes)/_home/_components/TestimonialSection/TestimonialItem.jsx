import React from 'react'
import img from '../../_assets/testimonial-active.jpg'
import Image from 'next/image'
import './testimonial.scss'
const TestimonialItem = ({ getSwiperRef }) => {
    return (
        <div className='testimonial-item flex items-center flex-col justify-center'>
            <div className="client-photo relative w-[70px] h-[70px] md:w-[120px] md:h-[120px] 2xl:w-[230px] 2xl:h-[230px] rounded-full">
                <Image className='h-full w-full border border-Blue rounded-full object-cover' src={img} alt='client' />
                <div className="h-full w-full rounded-full absolute bottom-0 left-3 -z-[10] border border-Gray"></div>
            </div>

            <div className="flex items-center mt-8 2xl:mt-[55px] justify-between">
                <button onClick={() => getSwiperRef.current.swiper.slidePrev()} className='border-2 flex shrink-0 items-center justify-center border-CoralLight px-2 sm:px-4 py-2 2xl:px-5 2xl:py-3.5 rounded'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.21457 8.66097L7.28027 12.7031C7.46406 12.8858 7.46406 13.1821 7.28027 13.3648C7.09648 13.5475 6.79851 13.5475 6.61472 13.3648L1.74655 8.52485C1.56276 8.34213 1.56275 8.04588 1.74655 7.86315L6.73428 2.86556C6.91807 2.68283 7.21605 2.68283 7.39983 2.86556C7.58362 3.04828 7.58362 3.34453 7.39983 3.52725L3.21642 7.7252L14.0911 7.72567C14.351 7.72567 14.5617 7.93515 14.5617 8.19357C14.5617 8.45197 14.351 8.66145 14.0911 8.66146L3.21457 8.66097Z" fill="#FF6534" />
                    </svg>
                </button>
                <div className="info flex px-2 sm:w-[90%] sm:px-10 xs:px-8  text-center flex-col items-center justify-center">
                    <h2 className='text-lg sm:text-[20px] md:text-[24px] 2xl:text-[28px] text-Coral font-bold leading-[120%] w-fit'>Stephen Smith</h2>
                    <p className='text-Gray text-base xs:text-base mt-1.5 2xl:mt-3 2xl:text-xl leading-[160%] profession'>Web Developer</p>
                    <p className='text-Gray text-sm xs:text-base mt-1 sm:mt-2 2xl:mt-[29px] 2xl:text-xl leading-[160%]'>Fonebox Automation  provide best automation products.</p>
                    <div className='flex gap-2 items-center mt-1 2xl:mt-[15px]'>
                        <svg className='h-[14px] sm:h-[17px] 2xl:h-[23px]' viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0245 0.728174C12.1741 0.267519 12.8259 0.267518 12.9755 0.728174L15.4187 8.24743C15.4856 8.45344 15.6776 8.59292 15.8942 8.59292H23.8004C24.2848 8.59292 24.4862 9.21273 24.0943 9.49743L17.6981 14.1446C17.5228 14.2719 17.4495 14.4976 17.5164 14.7036L19.9596 22.2229C20.1092 22.6835 19.582 23.0666 19.1902 22.7819L12.7939 18.1347C12.6186 18.0074 12.3814 18.0074 12.2061 18.1347L5.80985 22.7819C5.41799 23.0666 4.89075 22.6835 5.04043 22.2229L7.48358 14.7036C7.55052 14.4976 7.47719 14.2719 7.30194 14.1446L0.905686 9.49743C0.513829 9.21273 0.715217 8.59292 1.19958 8.59292H9.10579C9.3224 8.59292 9.51438 8.45344 9.58132 8.24743L12.0245 0.728174Z" fill="#FF6534" />
                        </svg>
                        <p className='text-Gray text-sm xs:text-base  2xl:text-xl leading-[160%]'>4.5</p>
                    </div>
                </div>
                <button onClick={() => getSwiperRef.current.swiper.slideNext()} className='border-2 shrink-0 flex items-center justify-center border-CoralLight px-2 sm:px-4 py-2 2xl:px-5 2xl:py-3.5 rounded'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7854 8.66097L8.71971 12.7031C8.53592 12.8858 8.53592 13.1821 8.71971 13.3648C8.90351 13.5475 9.20148 13.5475 9.38527 13.3648L14.2534 8.52485C14.4372 8.34213 14.4372 8.04588 14.2534 7.86315L9.26571 2.86556C9.08192 2.68283 8.78394 2.68283 8.60015 2.86556C8.41636 3.04828 8.41636 3.34453 8.60015 3.52725L12.7836 7.7252L1.90892 7.72567C1.649 7.72567 1.4383 7.93515 1.4383 8.19357C1.43831 8.45197 1.64901 8.66145 1.90892 8.66146L12.7854 8.66097Z" fill="#FF6534" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default TestimonialItem