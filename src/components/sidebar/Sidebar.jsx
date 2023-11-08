"use client"
import React, { useContext } from 'react'
import Logo from './assets/logo.svg';
import Image from 'next/image';
import { MenuIcon } from '../icons/Icon';
import { GetThemeContext } from '@/context/ThemeContext';
import { FiSearch } from 'react-icons/fi';
import SidebarMenu from './components/SidebarMenu';
const Sidebar = () => {
    const themeContext = useContext(GetThemeContext)
    return (
        <>

            <aside className={`fixed flex flex-col justify-between ${themeContext.sidebarStatus ? 'translate-x-0' : '-translate-x-full'} duration-500 z-[200] lg:hidden top-0 left-0 sm:rounded-r-2xl bg-Blue shadow-1 h-screen w-full sm:w-[350px]`}>
                <div className="shrink-0">
                    <div className="sidebar-header py-4 px-6 flex justify-between items-center">
                        <div className="logo">
                            <Image className='' src={Logo} />
                        </div>

                        <span onClick={() => themeContext.setSidebarStatus(!themeContext.sidebarStatus)}>
                            <MenuIcon activeMenu={!themeContext.sidebarStatus} white={true} />
                        </span>

                    </div>
                    <div className="sidebar-search h-full px-4">
                        <div className="flex rounded-3xl relative">
                            <input type="text" className='py-2 text-gray-600 bg-white font-Inter pl-4 pr-[30px] rounded-3xl w-full outline-none placeholder:text-gray-300' placeholder='Search' />
                            <button className='shrink-0 bg-Blue w-7 h-7 active:scale-95 duration-100 rounded-full flex items-center justify-center text-white absolute right-1 top-[50%] -translate-y-[50%]'>
                                <FiSearch />
                            </button>
                        </div>
                    </div>
                </div>
                <SidebarMenu />
                <div className="shrink-0 py-4 px-6">
                    <button className='bg-Coral duration-200 uppercase text-white w-full py-2 rounded-full'>Sign up</button>
                </div>
            </aside>


            {
                themeContext.sidebarStatus && (
                    <div onClick={() => themeContext.setSidebarStatus(false)} className="fixed z-[190] lg:hidden top-0 left-0 bg-black w-full h-full bg-opacity-70"></div>

                )
            }

        </>
    )
}

export default Sidebar