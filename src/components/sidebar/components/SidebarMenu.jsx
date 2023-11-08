"use client"
import { GetThemeContext } from '@/context/ThemeContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

const SidebarMenu = () => {
    const themeContext = useContext(GetThemeContext)
    const pathName = usePathname();

    return (
        <ul className="sidebar-menu mt-8 h-full px-6 flex flex-col">
            <li onClick={() => themeContext.setSidebarStatus(false)} className='w-full'>
                <Link href={'/'} className={`font-medium uppercase ${pathName === '/' ? 'text-Purple' : 'text-white'} w-full block cursor-pointer font-Exo  px-2 py-1.5 rounded-md  text-lg`}>
                    Home
                </Link>
            </li>
            {
                themeContext.menuItems?.map(item =>
                    <li onClick={() => themeContext.setSidebarStatus(false)} className='w-full'>
                        <Link href={item.path} className={`font-medium uppercase ${pathName === item.path ? 'text-Purple' : 'text-white'} w-full block cursor-pointer font-Exo  px-2 py-1.5 rounded-md  text-lg`}>
                            {item.title}
                        </Link>
                    </li>
                )

            }

        </ul>
    )
}

export default SidebarMenu