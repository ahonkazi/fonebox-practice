"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/logo.svg'
import '../header.scss'
import { GetThemeContext } from '@/context/ThemeContext'
import { usePathname } from 'next/navigation'
import { VscClose } from 'react-icons/vsc'
import { FiSearch } from 'react-icons/fi'
const DesktopNav = () => {
    const themeContext = useContext(GetThemeContext);
    const pathName = usePathname();
    return (

        <div className="justify-between items-center hidden lg:flex">
            <div className="logo">
                <Link href={'/'}><Image alt='logo' src={Logo} /></Link>
            </div>
            <ul className='flex items-center'>
                {themeContext?.menuItems?.map((item, index) =>
                    <li key={index} className='navItem'>
                        <Link href={item?.path} className={`navLink ${pathName === item.path ? 'active' : ''}`}>{item?.title}</Link>
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
                <button className='px-4 py-2 rounded bg-Coral text-white'>Sign in</button>
            </div>
        </div>


    )
}

export default DesktopNav


