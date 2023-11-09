"use client"
import { GetThemeContext } from '@/context/ThemeContext'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

const SidebarMenu = () => {
    const themeContext = useContext(GetThemeContext)
    const pathName = usePathname();
    const router = useRouter();
    const handleTop = (path) => {
        if (pathName === path) {
            window.scrollTo(0, 0)
        } else {
            router.push(path);
        }
    }
    return (
        
        <ul className="sidebar-menu mt-8 h-full px-6 flex flex-col">
            <li key={12} onClick={() => themeContext.setSidebarStatus(false)} className='w-full'>
                <button onClick={() => handleTop('/')} className={`font-medium text-start uppercase ${pathName === '/' ? 'text-Purple' : 'text-white'} w-full block cursor-pointer font-Exo  px-2 py-1.5 rounded-md  text-lg`}>
                    Home
                </button>
            </li>
            {
                themeContext.menuItems?.map((item, index) =>
                    <li key={index} onClick={() => themeContext.setSidebarStatus(false)} className='w-full'>
                        <button onClick={() => handleTop(item.path)} className={`font-medium text-start uppercase ${pathName === item.path ? 'text-Purple' : 'text-white'} w-full block cursor-pointer font-Exo  px-2 py-1.5 rounded-md  text-lg`}>
                            {item.title}
                        </button>
                    </li>
                )

            }

        </ul>
    )
}

export default SidebarMenu