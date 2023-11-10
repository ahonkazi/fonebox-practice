import { GetThemeContext } from '@/context/ThemeContext'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useContext } from 'react'
import { FiSearch } from 'react-icons/fi'

const DeshktopSearch = () => {
    const themeContext = useContext(GetThemeContext)
    
    return (
        <div className="hidden lg:block">
            <AnimatePresence>
                {
                    themeContext.deshtopSearchBarStatus && (
                        <motion.div style={{ overflow: 'clip' }} initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
                            <div className="pt-4 flex justify-center">
                                <div className='border-Blue relative border-[1.5px] rounded-full w-[500px] h-[55px]'>
                                    <input placeholder={'Search here...'} type="text" className='bg-transparent text-gray-400 font-Poppins outline-none w-full h-full px-4' />
                                    <button className='absolute right-1 top-[50%] -translate-y-[50%] text-2xl duration-100 active:scale-95 flex items-center justify-center w-[46px] h-[46px] bg-Blue text-white rounded-full'>
                                        <FiSearch />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default DeshktopSearch