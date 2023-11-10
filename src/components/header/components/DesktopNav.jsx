"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/logo.svg'
import '../header.scss'
import { GetThemeContext } from '@/context/ThemeContext'
import { usePathname, useRouter } from 'next/navigation'
import { VscClose } from 'react-icons/vsc'
import { FiSearch } from 'react-icons/fi'
const DesktopNav = () => {
    const themeContext = useContext(GetThemeContext);
    const pathName = usePathname();
    const router = useRouter();
    const handleTop = (path) => {
        if (pathName === path) {
            themeContext.setdeshtopSearchBarStatus(false);
            window.scrollTo(0, 0)

        } else {
            router.push(path);
        }
    }
    return (

        <div className="justify-between items-center hidden lg:flex">
            <div className="logo">
                <button onClick={() => handleTop('/')}><Image alt='logo' src={Logo} /></button>
            </div>
            <ul className='flex items-center'>
                {themeContext?.menuItems?.map((item, index) =>
                    <li onClick={() => handleTop(item.path)} key={index} className='navItem'>
                        <p className={`navLink cursor-pointer ${pathName === item.path ? 'active' : ''}`}>{item?.title}</p>
                    </li>
                )}
            </ul>
            <div className="flex items-center gap-6">
                <button onClick={() => themeContext.setdeshtopSearchBarStatus(!themeContext.deshtopSearchBarStatus)}>
                    {
                        themeContext.deshtopSearchBarStatus ? <VscClose className='text-[22px]' /> :

                            <FiSearch className='text-[22px]' />
                    }
                </button>

                <button>
                    <svg width="21" height="21" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_49_11)">
                            <path d="M11.0208 0C8.84112 0 6.71036 0.64636 4.89799 1.85734C3.08562 3.06833 1.67306 4.78955 0.838916 6.80334C0.00477512 8.81713 -0.213474 11.0331 0.211767 13.1709C0.637008 15.3087 1.68664 17.2724 3.22793 18.8137C4.76922 20.355 6.73295 21.4047 8.87078 21.8299C11.0086 22.2551 13.2245 22.0369 15.2383 21.2027C17.2521 20.3686 18.9733 18.956 20.1843 17.1437C21.3953 15.3313 22.0417 13.2005 22.0417 11.0208C22.0417 8.09792 20.8805 5.29473 18.8137 3.22793C16.7469 1.16112 13.9437 0 11.0208 0ZM20.5388 10.5199H17.0322C16.8819 7.22866 15.4843 3.8623 13.1449 1.7483C15.1636 2.20733 16.9776 3.31203 18.3119 4.89493C19.6462 6.47782 20.428 8.4526 20.5388 10.5199ZM10.0189 2.00379V10.5199H6.51231C6.65759 7.37895 7.89493 3.7571 10.0189 2.00379ZM10.0189 12.0227V20.0379C8.0402 18.2946 6.79785 14.828 6.51231 12.0227H10.0189ZM11.5218 20.0379V12.0227H15.5294C15.1937 14.8731 13.7209 18.2896 11.5218 20.0379ZM11.5218 10.5199V2.00379C13.8863 3.75209 15.364 7.33887 15.5294 10.5199H11.5218ZM8.59124 1.82846C6.3971 3.90739 5.14473 7.18859 5.00947 10.5199H1.52789C1.63534 8.51052 2.37684 6.5869 3.64591 5.02532C4.91498 3.46373 6.64631 2.34453 8.59124 1.82846ZM1.55795 12.0227H5.00947C5.28499 15.0885 6.3971 17.994 8.5161 20.0379C6.65948 19.6059 4.98688 18.5981 3.73724 17.1587C2.4876 15.7192 1.72485 13.9216 1.55795 12.0227ZM13.0246 20.3234C15.3105 18.125 16.7324 15.18 17.0322 12.0227H20.5388C20.3146 14.0194 19.4685 15.8951 18.1201 17.3846C16.7717 18.8741 14.9892 19.9022 13.0246 20.3234Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_49_11">
                                <rect width="23" height="23" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button className='px-4 py-2 rounded bg-Coral border border-transparent hover:bg-transparent hover:border-Coral hover:text-Coral duration-300 text-white'>Sign in</button>
            </div>
        </div>


    )
}

export default DesktopNav


export const DesktopNavSecondary = () => {
    const themeContext = useContext(GetThemeContext);
    const pathName = usePathname();
    const router = useRouter();
    const handleTop = (path) => {
        if (pathName === path) {
            themeContext.setdeshtopSearchBarStatus(false);
            window.scrollTo(0, 0)

        } else {
            router.push(path);
        }
    }
    return (

        <div className="justify-between items-center hidden lg:flex">
            <div className="logo">
                <button onClick={() => handleTop('/')}><Image alt='logo' src={Logo} /></button>
            </div>
            <ul className='flex items-center'>
                {themeContext?.menuItems?.map((item, index) =>
                    <li onClick={() => handleTop(item.path)} key={index} className='navItem'>
                        <p className={`navLink cursor-pointer ${pathName === item.path ? 'active' : ''}`}>{item?.title}</p>
                    </li>
                )}
            </ul>
            <div className="flex items-center gap-6">
                <button onClick={() => themeContext.setdeshtopSearchBarStatus(!themeContext.deshtopSearchBarStatus)}>
                    {
                        themeContext.deshtopSearchBarStatus ? <VscClose className='text-[22px]' /> :

                            <FiSearch className='text-[22px]' />
                    }
                </button>

                <button>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_127_1467)">
                            <path d="M11.5 0C8.45145 0.00467929 5.52909 1.21779 3.37344 3.37344C1.21779 5.52909 0.00467929 8.45145 0 11.5C0.00467929 14.5486 1.21779 17.4709 3.37344 19.6266C5.52909 21.7822 8.45145 22.9953 11.5 23C14.5486 22.9953 17.4709 21.7822 19.6266 19.6266C21.7822 17.4709 22.9953 14.5486 23 11.5C22.9953 8.45145 21.7822 5.52909 19.6266 3.37344C17.4709 1.21779 14.5486 0.00467929 11.5 0ZM11.5 1.76923C16.8838 1.76923 21.2308 6.11623 21.2308 11.5C21.2346 13.7717 20.442 15.9728 18.9909 17.7206C18.6173 16.6563 18.0228 15.683 17.2465 14.8646C16.4702 14.0462 15.5296 13.4012 14.4865 12.972C14.9374 12.5607 15.2979 12.0602 15.5452 11.5023C15.7925 10.9443 15.9212 10.3411 15.9231 9.73077C15.9231 7.29808 13.9327 5.30769 11.5 5.30769C10.3279 5.31096 9.2048 5.77801 8.37602 6.60679C7.54724 7.43557 7.08019 8.5587 7.07692 9.73077C7.07692 11.0099 7.636 12.1635 8.51531 12.972C7.47279 13.4013 6.53292 14.0463 5.75748 14.8648C4.98205 15.6832 4.3886 16.6565 4.01615 17.7206C2.56015 15.9751 1.76472 13.773 1.76923 11.5C1.76923 6.11623 6.11623 1.76923 11.5 1.76923ZM11.5 7.07692C12.9791 7.07692 14.1538 8.25169 14.1538 9.73077C14.1538 11.2098 12.9791 12.3846 11.5 12.3846C11.1508 12.387 10.8047 12.3199 10.4816 12.1874C10.1586 12.0549 9.86511 11.8595 9.61821 11.6126C9.3713 11.3657 9.17591 11.0722 9.04338 10.7491C8.91084 10.4261 8.8438 10.0799 8.84615 9.73077C8.84615 8.25169 10.0209 7.07692 11.5 7.07692ZM11.5 14.1538C14.5077 14.1538 16.974 16.2893 17.5472 19.1236C15.8285 20.491 13.6963 21.234 11.5 21.2308C9.30566 21.2352 7.17527 20.492 5.45985 19.1236C5.73493 17.7237 6.48764 16.4628 7.58933 15.5563C8.69103 14.6499 10.0733 14.1541 11.5 14.1538Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_127_1467">
                                <rect width="23" height="23" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button>
                    <svg width="21" height="21" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_49_11)">
                            <path d="M11.0208 0C8.84112 0 6.71036 0.64636 4.89799 1.85734C3.08562 3.06833 1.67306 4.78955 0.838916 6.80334C0.00477512 8.81713 -0.213474 11.0331 0.211767 13.1709C0.637008 15.3087 1.68664 17.2724 3.22793 18.8137C4.76922 20.355 6.73295 21.4047 8.87078 21.8299C11.0086 22.2551 13.2245 22.0369 15.2383 21.2027C17.2521 20.3686 18.9733 18.956 20.1843 17.1437C21.3953 15.3313 22.0417 13.2005 22.0417 11.0208C22.0417 8.09792 20.8805 5.29473 18.8137 3.22793C16.7469 1.16112 13.9437 0 11.0208 0ZM20.5388 10.5199H17.0322C16.8819 7.22866 15.4843 3.8623 13.1449 1.7483C15.1636 2.20733 16.9776 3.31203 18.3119 4.89493C19.6462 6.47782 20.428 8.4526 20.5388 10.5199ZM10.0189 2.00379V10.5199H6.51231C6.65759 7.37895 7.89493 3.7571 10.0189 2.00379ZM10.0189 12.0227V20.0379C8.0402 18.2946 6.79785 14.828 6.51231 12.0227H10.0189ZM11.5218 20.0379V12.0227H15.5294C15.1937 14.8731 13.7209 18.2896 11.5218 20.0379ZM11.5218 10.5199V2.00379C13.8863 3.75209 15.364 7.33887 15.5294 10.5199H11.5218ZM8.59124 1.82846C6.3971 3.90739 5.14473 7.18859 5.00947 10.5199H1.52789C1.63534 8.51052 2.37684 6.5869 3.64591 5.02532C4.91498 3.46373 6.64631 2.34453 8.59124 1.82846ZM1.55795 12.0227H5.00947C5.28499 15.0885 6.3971 17.994 8.5161 20.0379C6.65948 19.6059 4.98688 18.5981 3.73724 17.1587C2.4876 15.7192 1.72485 13.9216 1.55795 12.0227ZM13.0246 20.3234C15.3105 18.125 16.7324 15.18 17.0322 12.0227H20.5388C20.3146 14.0194 19.4685 15.8951 18.1201 17.3846C16.7717 18.8741 14.9892 19.9022 13.0246 20.3234Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_49_11">
                                <rect width="23" height="23" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.875 5.75H16.5V4.6C16.5 3.38 16.0259 2.20998 15.182 1.34731C14.3381 0.484642 13.1935 0 12 0C10.8065 0 9.66193 0.484642 8.81802 1.34731C7.97411 2.20998 7.5 3.38 7.5 4.6V5.75H4.125C3.82663 5.75 3.54048 5.87116 3.3295 6.08683C3.11853 6.30249 3 6.595 3 6.9V19.55C3 20.465 3.35558 21.3425 3.98851 21.9895C4.62145 22.6365 5.47989 23 6.375 23H17.625C18.5201 23 19.3786 22.6365 20.0115 21.9895C20.6444 21.3425 21 20.465 21 19.55V6.9C21 6.595 20.8815 6.30249 20.6705 6.08683C20.4595 5.87116 20.1734 5.75 19.875 5.75ZM9.75 4.6C9.75 3.99 9.98705 3.40499 10.409 2.97365C10.831 2.54232 11.4033 2.3 12 2.3C12.5967 2.3 13.169 2.54232 13.591 2.97365C14.0129 3.40499 14.25 3.99 14.25 4.6V5.75H9.75V4.6ZM18.75 19.55C18.75 19.855 18.6315 20.1475 18.4205 20.3632C18.2095 20.5788 17.9234 20.7 17.625 20.7H6.375C6.07663 20.7 5.79048 20.5788 5.5795 20.3632C5.36853 20.1475 5.25 19.855 5.25 19.55V8.05H7.5V9.2C7.5 9.505 7.61853 9.79751 7.8295 10.0132C8.04048 10.2288 8.32663 10.35 8.625 10.35C8.92337 10.35 9.20952 10.2288 9.4205 10.0132C9.63147 9.79751 9.75 9.505 9.75 9.2V8.05H14.25V9.2C14.25 9.505 14.3685 9.79751 14.5795 10.0132C14.7905 10.2288 15.0766 10.35 15.375 10.35C15.6734 10.35 15.9595 10.2288 16.1705 10.0132C16.3815 9.79751 16.5 9.505 16.5 9.2V8.05H18.75V19.55Z" fill="black" />
                    </svg>
                </button>
            </div>
        </div>


    )
}