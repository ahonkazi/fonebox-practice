"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/logo.svg'
import '../header.scss'
import { MenuIcon } from '@/components/icons/Icon'
import { GetThemeContext } from '@/context/ThemeContext'

const MobileNav = () => {
    const themeContext = useContext(GetThemeContext)
    return (
        <div className="justify-between items-center flex lg:hidden">
            <div className="logo">
                <Link href={'/'}><Image src={Logo} alt='logo' /></Link>
            </div>

            <span onClick={() => themeContext.setSidebarStatus(!themeContext.sidebarStatus)}>
                <MenuIcon activeMenu={true} />
            </span>
        </div>
    )
}

export default MobileNav


