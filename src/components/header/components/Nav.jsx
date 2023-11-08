"use client"
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NavInner from './NavInner'
import '../header.scss'
import DeshktopSearch from './DeshktopSearch'
const Nav = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
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
                <DeshktopSearch />

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