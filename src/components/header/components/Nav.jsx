"use client"
import React, { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NavInner from './NavInner'
import '../header.scss'
import DeshktopSearch from './DeshktopSearch'
import { GetThemeContext } from '@/context/ThemeContext'
const Nav = () => {
    const [isSticky, setIsSticky] = useState(false);
    const themeContext = useContext(GetThemeContext);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            setTimeout(() => {
                themeContext.setdeshtopSearchBarStatus(false)
            }, 300)
            if (window.scrollY > 72) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        })
    }, [])

    return (
        <>

            <nav className={`Navbar z-[100] site-container py-4 shadow-3 bg-white `}>
                <NavInner />
                <AnimatePresence>

                    {!isSticky && (
                        <motion.nav style={{ overflow: 'clip' }} initial={{ y: 0 }} >
                            <DeshktopSearch />
                        </motion.nav>
                    )}
                </AnimatePresence>

            </nav>


            <AnimatePresence>

                {isSticky && (
                    <motion.nav initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ duration: 0.3, delay: 0.5 }} className={`Navbar  site-container py-4 z-[50] fixed top-0 left-0 w-full shadow-3 bg-white `}>
                        <NavInner />
                        <DeshktopSearch />

                    </motion.nav>
                )}
            </AnimatePresence>

        </>
    )
}

export default Nav