import React from 'react'
import client1 from '../../_assets/client-1.jpg'
import client2 from '../../_assets/client-2.jpg'
import client3 from '../../_assets/client-3.jpg'
import client4 from '../../_assets/client-4.jpg'
import client5 from '../../_assets/client-5.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
const HeroLeftContent = () => {
    const clients = [
        { img: client1 },
        { img: client2 },
        { img: client3 },
        { img: client4 },
        { img: client5 },
    ]
    return (
        <div className='hero-left-content relative mt-4 lg:mt-8  lg:w-[40%] xl:w-[37%]'>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                <motion.div transition={{ delay: 0.5 }} initial={{ x: '-200px' }} animate={{ x: 0 }} className="title  px-8 sm:px-16 lg:px-0 ">
                    <h1 className='text-[36px] md:text-[40px] lg:text-[45px] xl:text-[55px] 2xl:text-[64px] font-Inter font-medium leading-[120%]'>
                        <span className='relative '>We
                            <span className="title-shape absolute left-0 top-0 -translate-y-[50%] -translate-x-[100%]">
                                <svg className='h-[32px] lg:h-[45px] 2xl:h-[51px]' viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.3914 47.5928C10.9991 46.3455 6.40043 45.7163 1.93946 45.1398C0.978641 45.019 0.0865819 45.6934 0.0179517 46.6434C-0.119309 47.5942 0.567396 48.4637 1.45959 48.5846C5.78329 49.1395 10.2439 49.7333 14.4303 50.9341C15.3225 51.1945 16.2837 50.6584 16.5582 49.7361C16.8328 48.8145 16.2836 47.854 15.3914 47.5928Z" fill="#FF6534" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M28.7046 29.9082C21.6357 22.6082 13.6746 16.2479 6.74295 8.75212C6.12528 8.05205 5.0272 8.01455 4.34089 8.66808C3.65459 9.3223 3.58623 10.4224 4.27253 11.1225C11.2042 18.6398 19.1653 25.0209 26.2342 32.3424C26.9205 33.0258 28.0183 33.0355 28.7046 32.3632C29.3223 31.6917 29.3909 30.5916 28.7046 29.9082Z" fill="#FF6534" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M41.9508 1.8307C42.1566 6.00885 42.3621 10.187 42.568 14.3658C42.568 15.3229 43.392 16.0618 44.3528 16.0153C45.3136 15.9681 45.9995 15.1534 45.9995 14.1957C45.7936 10.0106 45.5882 5.8262 45.3823 1.6418C45.3136 0.684767 44.4899 -0.0493262 43.5291 0.00276173C42.6369 0.0548497 41.8821 0.87437 41.9508 1.8307Z" fill="#FF6534" />
                                </svg>
                            </span>
                        </span> <span className='text-Blue'>Build</span> Your Dream</h1>
                </motion.div>
                <p className='text-[#171717] lg:text-Gray text-base md:text-base px-8 sm:px-16 lg:px-0  2xl:text-lg font-Inter font-normal leading-[160%] mt-5'>
                    We meet you where you are in your journey with market leading hardware, sottware, and services to make you more resilient, agile, and sustainable.
                </p>
                <div className="hero-button-group px-6 lg:px-0 w-full py-8 font-Inter font-medium grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4">
                    <button className='lg:px-16 hover:bg-transparent hover:text-Coral hover:border-Coral border  border-transparent duration-300 text-sm lg:text-base  py-2.5 2xl:px-20 2xl:py-3 rounded-full sm:rounded-md relative  bg-Coral text-white'>
                        Contact us
                        <span className='absolute -top-[50%] -left-5 pointer-events-none  '>
                            <svg className='w-[50px] h-[50px]' viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32.5" cy="32.5" r="32.5" fill="#FF6534" fillOpacity="0.24" />
                            </svg>
                        </span>
                    </button>
                    <button className='lg:px-8 lg:text-base  py-2.5 2xl:px-10 2xl:py-3 rounded-full sm:rounded-md shrink-0 bg-Blue lg:bg-transparent lg:text-Gray text-white  lg:border lg:border-LightGray'>Learn more</button>

                </div>
                <div className="clients mt-4 gap-4 lg:gap-0 flex items-center flex-col-reverse justify-center lg:flex-row lg:justify-start">
                    <div className="images flex ml-[18px] lg:ml-0">
                        {
                            clients.map((item, index) =>
                                <Image key={index + 1} style={{ "transform": `translateX(-${index * 9}px)` }} className={`w-[50px] 2xl:w-[57px] border-[4px] border-white h-[50px] 2xl:h-[57px] rounded-full`} src={item?.img} alt='client' />
                            )
                        }
                    </div>
                    <div className="flex flex-col -translate-x-2">
                        <p className='font-Inter font-bold text-lg text-Blue'>1500+</p>
                        <p className='text-Gray'>Our Clients</p>
                    </div>
                </div>
            </div>


            <div className="absolute bottom-0 right-0 md:top-0 md:left-full lg:bottom-full lg:left-full">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6352 21.5291C17.4195 19.7627 17.2465 17.9909 17.1092 16.2173C17.0057 14.8858 16.9201 13.5489 16.9059 12.2121C16.9005 11.7237 17.3517 9.6667 17.1716 9.32268C17.1627 9.30486 16.567 9.19078 16.7579 9.56867C16.7989 9.65066 17.2055 9.86456 17.2625 9.90377C17.7512 10.2407 18.2005 10.6471 18.6428 11.041C19.6593 11.9483 20.6294 12.909 21.587 13.8769C22.9031 15.212 24.196 16.572 25.455 17.9624C25.7617 18.301 26.3983 18.3046 26.7639 18.0711C27.9195 17.3332 34.523 12.9589 35.3862 14.0445C36.1886 15.0551 34.3643 18.6308 33.9613 19.6094C33.4281 20.9035 32.8485 22.1833 32.219 23.4346C32.1513 23.5701 32.2101 23.7465 32.3028 23.8517C33.4887 25.2028 34.639 26.586 35.7571 27.9942C36.6202 29.0815 37.4726 30.1849 38.2555 31.3328C38.5676 31.7909 40.037 33.5787 39.8176 34.2561C39.4021 35.543 29.4728 32.5966 27.9213 32.1527C27.5379 32.044 26.8977 32.028 26.6979 32.4754C26.0363 33.9637 25.3123 35.4271 24.5437 36.8638C24.0836 37.7248 21.5995 42.7656 20.4974 42.3966C19.8947 42.1952 19.5487 40.14 19.4239 39.6249C19.1029 38.2987 18.9085 36.9405 18.7409 35.5876C18.5394 33.9655 18.3896 32.3327 18.304 30.7C18.2826 30.2918 17.7922 30.1831 17.4712 30.1581C15.9714 30.0423 7.12449 29.5343 7.22079 27.7714C7.25646 27.1172 8.78117 26.3436 9.2591 26.037C10.3166 25.3579 11.4276 24.7625 12.5439 24.1921C14.0758 23.4079 15.6397 22.6753 17.2215 21.9961C18.2237 21.5666 17.0878 20.7573 16.3816 21.0621C14.3558 21.932 12.3567 22.8856 10.4129 23.9266C9.25375 24.5469 5.24846 26.2598 5.53379 28.0673C5.81199 29.8373 9.79943 30.2276 11.0781 30.4558C13.1913 30.8301 15.333 31.0761 17.4712 31.2437C17.193 31.0636 16.9166 30.8836 16.6384 30.7018C16.7614 33.0832 16.9968 35.4753 17.3981 37.8264C17.6834 39.5037 17.9972 43.1453 20.1318 43.5784C22.3485 44.0276 24.0034 40.8423 24.9093 39.3468C26.1861 37.2399 27.3025 35.0172 28.3029 32.7659C27.8945 32.8728 27.4879 32.9816 27.0796 33.0885C30.6729 34.117 34.3982 35.1705 38.1307 35.4967C39.0383 35.5769 41.016 35.8211 41.4404 34.6821C41.8934 33.4682 40.1975 31.5182 39.5805 30.6251C38.2145 28.6501 36.6897 26.7821 35.1454 24.9461C34.7477 24.4738 34.2662 24.0192 33.9185 23.5095C33.6332 23.0906 33.8614 23.595 33.8472 23.6699C33.89 23.4435 34.104 23.1458 34.202 22.9408C35.0081 21.26 39.0437 14.114 36.1369 12.9643C34.4285 12.2887 31.9587 13.7611 30.5142 14.4883C28.8254 15.3403 27.1777 16.2868 25.5834 17.3046C26.0203 17.3403 26.4554 17.3777 26.8923 17.4134C25.257 15.6095 23.5736 13.8413 21.8313 12.139C20.7293 11.0624 18.2326 7.9359 16.3673 8.41895C14.5073 8.90022 15.2456 13.0605 15.3187 14.3635C15.4507 16.7556 15.679 19.1459 15.9696 21.5238C16.0606 22.2671 17.7226 22.235 17.6352 21.5291Z" fill="#90CBF8" fillOpacity="0.49" />
                    <path d="M0.388912 15.2975C2.29704 15.8376 4.20695 16.3759 6.11507 16.916C6.42715 17.0051 7.03347 17.0586 7.2546 16.7413C7.45968 16.4472 7.2974 16.1727 6.95501 16.0764C5.04688 15.5363 3.13697 14.998 1.22884 14.4579C0.916767 14.3688 0.310447 14.3153 0.0893179 14.6326C-0.113978 14.9249 0.0483021 15.2012 0.388912 15.2975Z" fill="#90CBF8" fillOpacity="0.49" />
                    <path d="M2.96904 10.2386C4.53834 11.2743 6.23069 12.014 8.04965 12.481C8.95378 12.7127 9.5494 11.604 8.49191 11.3331C6.93509 10.9338 5.48706 10.2814 4.14602 9.39551C3.51473 8.97841 2.11663 9.67538 2.96904 10.2386Z" fill="#90CBF8" fillOpacity="0.49" />
                    <path d="M5.32879 38.147C6.41304 37.3164 7.49728 36.4857 8.58152 35.6551C8.89717 35.4127 8.51376 35.1043 8.28193 35.0205C7.911 34.8868 7.45448 34.9492 7.1424 35.1863C6.05816 36.0169 4.97392 36.8476 3.88967 37.6782C3.57403 37.9206 3.95744 38.229 4.18927 38.3128C4.56019 38.4465 5.0185 38.3859 5.32879 38.147Z" fill="#90CBF8" fillOpacity="0.49" />
                    <path d="M9.03036 43.6407C9.4637 42.5142 10.2002 41.6033 11.2149 40.9474C11.543 40.7352 11.502 40.3324 11.2149 40.1114C10.8868 39.8601 10.3696 39.8975 10.0379 40.1114C8.84311 40.8832 7.93542 41.999 7.42539 43.327C7.11867 44.1184 8.75751 44.3466 9.03036 43.6407Z" fill="#90CBF8" fillOpacity="0.49" />
                    <path d="M26.5107 44.7672C26.4002 46.4214 26.5963 48.0274 27.0725 49.6138C27.2579 50.2305 28.9021 50.0861 28.6792 49.3428C28.2298 47.8456 28.0729 46.3251 28.1763 44.7672C28.2209 44.0881 26.5571 44.0631 26.5107 44.7672Z" fill="#90CBF8" fillOpacity="0.49" />
                    <path d="M31.7836 43.6442C32.4559 44.9383 33.3779 46.0203 34.5317 46.9098C35.0809 47.334 36.5076 46.7636 35.7087 46.1486C34.735 45.3982 33.9539 44.4464 33.3886 43.3573C33.0712 42.7441 31.427 42.9598 31.7836 43.6442Z" fill="#90CBF8" fillOpacity="0.49" />
                    <path d="M25.6989 5.01254C26.3124 3.32274 27.2861 1.8629 28.62 0.654376C29.2138 0.116066 27.6231 -0.224401 27.1808 0.173093C25.7863 1.43509 24.7342 2.98943 24.0922 4.75766C23.8461 5.43856 25.4885 5.59006 25.6989 5.01254Z" fill="#90CBF8" fillOpacity="0.49" />
                    <path d="M29.6972 7.70057C30.9063 6.63287 32.1136 5.56695 33.3226 4.49924C33.6169 4.239 33.2745 3.95381 33.023 3.86291C32.6735 3.73635 32.1706 3.77555 31.8835 4.03045C30.6744 5.09816 29.4671 6.16407 28.2581 7.23178C27.9638 7.49202 28.3062 7.77723 28.5577 7.86814C28.909 7.99291 29.4101 7.95369 29.6972 7.70057Z" fill="#90CBF8" fillOpacity="0.49" />
                    <path d="M41.0337 28.5983C42.7777 29.5341 44.5717 30.3611 46.4174 31.0723C47.1076 31.3379 48.2756 30.5661 47.2574 30.174C45.5258 29.5073 43.8459 28.7391 42.2106 27.8621C41.8843 27.6856 41.3493 27.6143 41.0337 27.8621C40.7751 28.0671 40.6806 28.4093 41.0337 28.5983Z" fill="#90CBF8" fillOpacity="0.49" />
                    <path d="M42.8401 23.4898C44.9604 23.8516 47.0897 24.1048 49.235 24.2616C50.264 24.3365 50.2461 23.2313 49.235 23.1583C47.2377 23.0121 45.2565 22.7643 43.2824 22.4257C42.4032 22.2759 41.7505 23.3044 42.8401 23.4898Z" fill="#90CBF8" fillOpacity="0.49" />
                </svg>
            </div>
        </div>
    )
}

export default HeroLeftContent