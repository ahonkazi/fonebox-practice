import React from 'react'
import aboutImg from '../../_assets/about-image.png'
import aboutBoxIcon from '../../_assets/icons/aboutleft-icon.svg';
import Image from 'next/image'
const AboutUsLeft = () => {
    return (
        <div className='lg:w-[40%] relative mt-8 lg:mt-0 flex justify-center lg:block shrink-0'>
            <Image className='w-[90%] 2xl:w-auto' src={aboutImg} alt='About image' />
            <div className="box-1 px-2 py-2 rounded-md absolute  left-2 lg:-left-[8%] top-0 -translate-x-[5%] -translate-y-[50%] w-[200px] text-center bg-white shadow-box ">
                <p className="box-title leading-[120%] text-Blue font-semibold text-sm">Wonderful Service</p>
                <p className='text-xs text-Gray font-Inter leading-[120%] mt-1'>We provide extra ordinary service that you will get impressed</p>
            </div>
            <div className="box-1 px-2 py-2 translate-y-[50%] rounded-md absolute  right-0 top-[50%] w-[200px] text-center bg-white shadow-box ">
                <div className="flex items-center">
                    <Image src={aboutBoxIcon} alt='' />
                    <p className='text-xs text-Gray text-start font-Inter leading-[120%] mt-1'>We are everywhere for you</p>
                </div>
            </div>

            <div className="shape-1 absolute bottom-0 left-full">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6352 21.5292C17.4195 19.7627 17.2465 17.9909 17.1092 16.2173C17.0057 14.8858 16.9201 13.549 16.9059 12.2121C16.9005 11.7237 17.3517 9.66673 17.1716 9.32271C17.1627 9.30489 16.567 9.19081 16.7579 9.5687C16.7989 9.65069 17.2055 9.86459 17.2625 9.9038C17.7512 10.2407 18.2005 10.6471 18.6428 11.041C19.6593 11.9483 20.6294 12.9091 21.587 13.8769C22.9031 15.212 24.196 16.5721 25.455 17.9624C25.7617 18.3011 26.3983 18.3046 26.7639 18.0711C27.9195 17.3332 34.523 12.959 35.3862 14.0445C36.1886 15.0552 34.3643 18.6308 33.9613 19.6094C33.4281 20.9035 32.8485 22.1833 32.219 23.4346C32.1513 23.5701 32.2101 23.7466 32.3028 23.8517C33.4887 25.2029 34.639 26.5861 35.7571 27.9942C36.6202 29.0815 37.4726 30.1849 38.2555 31.3328C38.5676 31.7909 40.037 33.5787 39.8176 34.2561C39.4021 35.543 29.4728 32.5966 27.9213 32.1527C27.5379 32.044 26.8977 32.028 26.6979 32.4754C26.0363 33.9638 25.3123 35.4272 24.5437 36.8639C24.0836 37.7248 21.5995 42.7656 20.4974 42.3967C19.8947 42.1953 19.5487 40.1401 19.4239 39.6249C19.1029 38.2988 18.9085 36.9405 18.7409 35.5876C18.5394 33.9655 18.3896 32.3328 18.304 30.7C18.2826 30.2918 17.7922 30.1831 17.4712 30.1582C15.9714 30.0423 7.12449 29.5343 7.22079 27.7714C7.25646 27.1172 8.78117 26.3436 9.2591 26.037C10.3166 25.3579 11.4276 24.7626 12.5439 24.1922C14.0758 23.4079 15.6397 22.6753 17.2215 21.9962C18.2237 21.5666 17.0878 20.7573 16.3816 21.0621C14.3558 21.932 12.3567 22.8856 10.4129 23.9266C9.25375 24.5469 5.24846 26.2599 5.53379 28.0673C5.81199 29.8373 9.79943 30.2277 11.0781 30.4558C13.1913 30.8301 15.333 31.0761 17.4712 31.2437C17.193 31.0637 16.9166 30.8836 16.6384 30.7018C16.7614 33.0832 16.9968 35.4753 17.3981 37.8264C17.6834 39.5037 17.9972 43.1453 20.1318 43.5785C22.3485 44.0276 24.0034 40.8424 24.9093 39.3468C26.1861 37.24 27.3025 35.0172 28.3029 32.7659C27.8945 32.8729 27.4879 32.9816 27.0796 33.0886C30.6729 34.117 34.3982 35.1705 38.1307 35.4967C39.0383 35.5769 41.016 35.8211 41.4404 34.6821C41.8934 33.4682 40.1975 31.5182 39.5805 30.6252C38.2145 28.6502 36.6897 26.7821 35.1454 24.9462C34.7477 24.4738 34.2662 24.0193 33.9185 23.5095C33.6332 23.0906 33.8614 23.5951 33.8472 23.6699C33.89 23.4435 34.104 23.1459 34.202 22.9409C35.0081 21.26 39.0437 14.114 36.1369 12.9643C34.4285 12.2888 31.9587 13.7611 30.5142 14.4883C28.8254 15.3404 27.1777 16.2869 25.5834 17.3047C26.0203 17.3403 26.4554 17.3778 26.8923 17.4134C25.257 15.6095 23.5736 13.8413 21.8313 12.139C20.7293 11.0624 18.2326 7.93593 16.3673 8.41898C14.5073 8.90025 15.2456 13.0606 15.3187 14.3636C15.4507 16.7557 15.679 19.146 15.9696 21.5238C16.0606 22.2671 17.7226 22.235 17.6352 21.5292Z" fill="#90CBF8" fill-opacity="0.49" />
                    <path d="M0.388912 15.2975C2.29704 15.8376 4.20695 16.3759 6.11507 16.916C6.42715 17.0051 7.03347 17.0586 7.2546 16.7413C7.45968 16.4472 7.2974 16.1727 6.95501 16.0765C5.04688 15.5364 3.13697 14.998 1.22884 14.4579C0.916767 14.3688 0.310447 14.3153 0.0893179 14.6326C-0.113978 14.925 0.0483021 15.2012 0.388912 15.2975Z" fill="#90CBF8" fill-opacity="0.49" />
                    <path d="M2.96904 10.2386C4.53834 11.2743 6.23069 12.014 8.04965 12.481C8.95378 12.7127 9.5494 11.604 8.49191 11.3331C6.93509 10.9338 5.48706 10.2814 4.14602 9.39551C3.51473 8.97841 2.11663 9.67538 2.96904 10.2386Z" fill="#90CBF8" fill-opacity="0.49" />
                    <path d="M5.32879 38.147C6.41304 37.3164 7.49728 36.4857 8.58152 35.6551C8.89717 35.4127 8.51376 35.1043 8.28193 35.0205C7.911 34.8868 7.45448 34.9492 7.1424 35.1863C6.05816 36.0169 4.97392 36.8476 3.88967 37.6782C3.57403 37.9206 3.95744 38.229 4.18927 38.3128C4.56019 38.4465 5.0185 38.3859 5.32879 38.147Z" fill="#90CBF8" fill-opacity="0.49" />
                    <path d="M9.03036 43.6407C9.4637 42.5142 10.2002 41.6033 11.2149 40.9474C11.543 40.7352 11.502 40.3324 11.2149 40.1114C10.8868 39.8601 10.3696 39.8975 10.0379 40.1114C8.84311 40.8832 7.93542 41.999 7.42539 43.327C7.11867 44.1184 8.75751 44.3466 9.03036 43.6407Z" fill="#90CBF8" fill-opacity="0.49" />
                    <path d="M26.5107 44.7672C26.4002 46.4214 26.5963 48.0274 27.0725 49.6138C27.2579 50.2305 28.9021 50.0861 28.6792 49.3428C28.2298 47.8456 28.0729 46.3251 28.1763 44.7672C28.2209 44.0881 26.5571 44.0631 26.5107 44.7672Z" fill="#90CBF8" fill-opacity="0.49" />
                    <path d="M31.7836 43.6442C32.4559 44.9383 33.3779 46.0203 34.5317 46.9097C35.0809 47.334 36.5076 46.7636 35.7087 46.1486C34.735 45.3982 33.9539 44.4463 33.3886 43.3572C33.0712 42.744 31.427 42.9597 31.7836 43.6442Z" fill="#90CBF8" fill-opacity="0.49" />
                    <path d="M25.6989 5.01254C26.3124 3.32274 27.2861 1.8629 28.62 0.654376C29.2138 0.116066 27.6231 -0.224401 27.1808 0.173093C25.7863 1.43509 24.7342 2.98943 24.0922 4.75766C23.8461 5.43856 25.4885 5.59006 25.6989 5.01254Z" fill="#90CBF8" fill-opacity="0.49" />
                    <path d="M29.6972 7.70061C30.9063 6.6329 32.1136 5.56698 33.3226 4.49927C33.6169 4.23903 33.2745 3.95384 33.023 3.86294C32.6735 3.73638 32.1706 3.77558 31.8835 4.03048C30.6744 5.09819 29.4671 6.1641 28.2581 7.23181C27.9638 7.49205 28.3062 7.77726 28.5577 7.86817C28.909 7.99294 29.4101 7.95372 29.6972 7.70061Z" fill="#90CBF8" fill-opacity="0.49" />
                    <path d="M41.0337 28.5983C42.7777 29.5341 44.5717 30.3611 46.4174 31.0723C47.1076 31.3379 48.2756 30.5661 47.2574 30.174C45.5258 29.5073 43.8459 28.7391 42.2107 27.8621C41.8843 27.6856 41.3493 27.6143 41.0337 27.8621C40.7751 28.0671 40.6806 28.4093 41.0337 28.5983Z" fill="#90CBF8" fill-opacity="0.49" />
                    <path d="M42.8401 23.4898C44.9604 23.8516 47.0897 24.1048 49.235 24.2616C50.264 24.3365 50.2461 23.2313 49.235 23.1583C47.2377 23.0121 45.2565 22.7643 43.2824 22.4257C42.4032 22.2759 41.7505 23.3044 42.8401 23.4898Z" fill="#90CBF8" fill-opacity="0.49" />
                </svg>
            </div>
        </div>
    )
}

export default AboutUsLeft