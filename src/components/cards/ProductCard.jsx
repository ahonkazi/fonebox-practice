import Image from 'next/image'
import React from 'react'
import { RatingStar } from '../icons/Icon'
import img from './assets/product-1.png'
import img2 from './assets/product-2.png'
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


export const ProductAnimatedCard = () => {
    return (
        <div className='bg-white duration-300 group shadow-shadow1 sm:shadow-none sm:hover:shadow-shadow1 rounded-3xl cursor-pointer select-none px-6 py-6 2xl:py-[33px] 2xl:px-[43px]'>
            <div className="relative  pt-6 pb-[40px]   bg-gradient-product px-4 rounded-3xl">
                <Image className='w-full object-cover rounded-3xl' alt={''} src={img2} />
                <div className="h-full w-full opacity-100 sm:opacity-0 group-hover:opacity-100 duration-300 overflow-y-hidden  pb-4 rounded-3xl bg-Gradient-Product top-0 left-0 absolute">
                    <div className="h-full relative w-full flex flex-col justify-end items-center">
                        <button className='w-[80%]  translate-y-0 sm:group-hover:translate-y-0 duration-300 sm:translate-y-[100px]  py-2 font-medium  bg-Coral text-white rounded'>Add to cart</button>
                        <div className="absolute flex flex-col gap-2 top-4 right-4">
                            <button className=' bg-white shadow-1 text-[#2299F3] flex items-center justify-center    w-8 h-8  text-lg rounded-full'>
                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_216_56)">
                                        <path d="M11.9269 12.7967C11.8175 12.7967 11.7089 12.7521 11.6358 12.6668C11.5087 12.5186 11.536 12.3035 11.6966 12.1863C11.9515 12.0004 12.1896 11.8115 12.4049 11.6247C12.5541 11.4953 12.7887 11.5019 12.9291 11.6393C13.0696 11.7769 13.0623 11.9933 12.9133 12.1229C12.6826 12.3231 12.4282 12.525 12.1567 12.7229C12.0914 12.7708 12.0103 12.7968 11.9269 12.7967Z" fill="#2299F3" />
                                        <path d="M8.99989 14.482C8.94134 14.482 8.883 14.4693 8.82965 14.4437C8.74568 14.4037 6.74786 13.4435 4.71857 11.8157C3.51921 10.8537 2.56176 9.85811 1.87269 8.85692C0.997131 7.58452 0.553101 6.2981 0.553101 5.0332C0.553101 3.89516 1.04214 2.73655 1.89457 1.85433C2.32235 1.41168 2.81597 1.06149 3.36147 0.813926C3.94323 0.549837 4.55625 0.415871 5.18302 0.415871C6.05191 0.415871 6.91122 0.670542 7.66822 1.1524C8.19205 1.48587 8.64442 1.91103 8.99989 2.40038C9.35536 1.91084 9.80773 1.48587 10.3316 1.1524C11.0886 0.670542 11.9479 0.415871 12.8168 0.415871C13.4435 0.415871 14.0565 0.549837 14.6383 0.813926C15.1838 1.06149 15.6774 1.41168 16.1052 1.85433C16.9576 2.73655 17.4467 3.89535 17.4467 5.0332C17.4467 6.91238 16.4665 8.81752 14.5335 10.6959C14.3924 10.833 14.1578 10.8385 14.0092 10.7084C13.8607 10.5783 13.8546 10.3619 13.9957 10.2248C15.7935 8.47789 16.7051 6.73114 16.7051 5.03301C16.7051 4.06065 16.2846 3.06791 15.5516 2.30928C14.7979 1.52931 13.8265 1.09973 12.8168 1.09973C12.0989 1.09973 11.3853 1.3125 10.7529 1.71537C10.1603 2.09266 9.65562 2.6316 9.33203 3.23282C9.26931 3.3491 9.14075 3.42272 8.99989 3.42272C8.85903 3.42272 8.73047 3.3491 8.66775 3.23282C8.34416 2.6316 7.83949 2.09266 7.2469 1.71537C6.61429 1.3127 5.90064 1.09973 5.18302 1.09973C4.17306 1.09973 3.20186 1.52931 2.4482 2.30928C1.71516 3.06791 1.29468 4.06065 1.29468 5.03301C1.29468 6.16394 1.6985 7.32505 2.49467 8.48404C3.14352 9.42834 4.05159 10.3725 5.19385 11.2902C6.83266 12.6068 8.49293 13.4929 9.00802 13.7551C9.26785 13.6345 9.80794 13.3731 10.4374 13.0053C10.6104 12.9042 10.8394 12.9516 10.9492 13.1112C11.0588 13.2707 11.0073 13.4821 10.8344 13.5832C9.91025 14.1233 9.18721 14.4366 9.15679 14.4497C9.10769 14.4709 9.05413 14.482 8.99989 14.482Z" fill="#2299F3" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_216_56">
                                            <rect width="16.9157" height="14.0964" fill="white" transform="translate(0.542114 0.397591)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button className=' bg-white shadow-1 text-[#2299F3] flex items-center justify-center   w-8 h-8  text-lg rounded-full'>
                                <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_216_61)">
                                        <path d="M19.0697 5.93475C18.9465 5.76906 18.0222 4.48491 16.4817 3.18005C14.3455 1.35739 12.086 0.383926 9.94985 0.383926C7.81366 0.383926 5.55423 1.35739 3.41804 3.18005C1.81589 4.54705 0.871039 5.89333 0.829958 5.93475C0.604015 6.22472 0.562934 6.72181 0.829958 7.0532C0.9532 7.2189 1.87751 8.50305 3.41804 9.80791C5.55423 11.6306 7.81366 12.604 9.94985 12.604C12.086 12.604 14.3455 11.6306 16.4817 9.80791C18.0838 8.44091 19.0287 7.09463 19.0697 7.0532C19.2957 6.76324 19.3368 6.26615 19.0697 5.93475ZM18.4125 6.55612C18.3714 6.61825 14.6741 11.7755 9.94985 11.7755C5.22558 11.7755 1.52833 6.61825 1.48725 6.55612C1.48725 6.5354 1.46671 6.5354 1.46671 6.5354C1.44617 6.51469 1.46671 6.45255 1.48725 6.41113C1.52833 6.36971 5.22558 1.21241 9.94985 1.21241C14.6741 1.21241 18.3714 6.36971 18.4125 6.43184C18.4125 6.45255 18.433 6.45255 18.433 6.45255C18.433 6.47327 18.433 6.5354 18.4125 6.55612ZM9.94985 2.86937C7.91636 2.86937 6.2526 4.50562 6.2526 6.49398C6.2526 8.48233 7.91636 10.1186 9.94985 10.1186C11.9833 10.1186 13.6471 8.48233 13.6471 6.49398C13.6471 4.50562 11.9833 2.86937 9.94985 2.86937ZM9.94985 9.2901C8.36825 9.2901 7.07421 8.02667 7.07421 6.49398C7.07421 4.96129 8.36825 3.69785 9.94985 3.69785C11.5315 3.69785 12.8255 4.96129 12.8255 6.49398C12.8255 8.02667 11.5315 9.2901 9.94985 9.2901ZM10.9769 6.49398C10.9769 7.07392 10.525 7.52958 9.94985 7.52958C9.37473 7.52958 8.92284 7.07392 8.92284 6.49398C8.92284 5.91404 9.37473 5.45838 9.94985 5.45838C10.525 5.45838 10.9769 5.91404 10.9769 6.49398Z" fill="#2299F3" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_216_61">
                                            <rect width="18.7952" height="12.2169" fill="white" transform="translate(0.602417 0.385544)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h2 className='product-title leading-[120%] text-base lg:text-xl font-medium'>S8VK-C06024 Omron</h2>
                <p className='product-text mt-2 leading-[160%] text-sm lg:text-base text-Gray'>
                    Fonebox Automation  provide best automation products.
                </p>
                <div className="flex mt-4 items-center justify-between flex-wrap-reverse">
                    <div className="">
                        <RatingStar />
                    </div>
                    <div className="flex items-center ">
                        <p className='leading-[120%] text-base lg:text-xl font-medium text-Coral'>105$</p>
                        <p className='text-Coral text-sm'>(20% Off)</p>
                    </div>
                </div>
            </div>
        </div >
    )
}