"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/logo.svg'
import '../header.scss'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const NavInner = () => {
    return (
        <>
            <DesktopNav />
            <MobileNav />
        </>
    )
}

export default NavInner


