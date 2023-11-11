"use client"
import React, { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NavInner from './NavInner'
import '../header.scss'
import DeshktopSearch from './DeshktopSearch'
import { GetThemeContext } from '@/context/ThemeContext'
import DesktopNav, { DesktopNavSecondary } from './DesktopNav'
import MobileNav from './MobileNav'
const Nav = () => {
    const [isSticky, setIsSticky] = useState(false);
    const themeContext = useContext(GetThemeContext);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {

            if (window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        })
    }, [])

    return (

        <AnimatePresence>

            {isSticky && (
                <motion.nav initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className={`Navbar site-container py-4 z-[50] fixed top-0 left-0 w-full shadow-3 bg-white `}>
                    <DesktopNav />
                    <MobileNav />
                    <DeshktopSearch />

                </motion.nav>
            )}
        </AnimatePresence>

    )
}
export default Nav



export const NavNotFixed = () => {
    const [isSticky, setIsSticky] = useState(false);
    const themeContext = useContext(GetThemeContext);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        })
    }, [])

    return (
        <>
            <nav className={`Navbar z-[100] relative site-container py-4 shadow-3 bg-white `}>
                <DesktopNav />
                <MobileNav />
                <AnimatePresence>
                    {!isSticky && (
                        <motion.nav style={{ overflow: 'clip' }} initial={{ y: 0 }} >
                            <DeshktopSearch />
                        </motion.nav>
                    )}
                </AnimatePresence>

            </nav>

        </>
    )
}

export const NavSecondary = () => {
    const [isSticky, setIsSticky] = useState(false);
    const themeContext = useContext(GetThemeContext);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {

            if (window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        })
    }, [])

    return (

        <AnimatePresence>

            {isSticky && (
                <motion.nav initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className={`Navbar site-container py-5 z-[50] fixed top-0 left-0 w-full shadow-3 bg-white `}>
                    <DesktopNavSecondary />
                    <MobileNav />
                    <DeshktopSearch />

                </motion.nav>
            )}
        </AnimatePresence>

    )
}
export const NavSecondaryNotFixed = () => {
    const [isSticky, setIsSticky] = useState(false);
    const themeContext = useContext(GetThemeContext);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        })
    }, [])

    return (
        <>
            <nav className={`Navbar z-[100] relative site-container py-5 shadow-3 bg-white `}>
                <DesktopNavSecondary />
                <MobileNav />
                <AnimatePresence>
                    {!isSticky && (
                        <motion.nav style={{ overflow: 'clip' }} initial={{ y: 0 }} >
                            <DeshktopSearch />
                        </motion.nav>
                    )}
                </AnimatePresence>

            </nav>

        </>
    )
}
