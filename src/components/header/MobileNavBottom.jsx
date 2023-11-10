import { GetThemeContext } from '@/context/ThemeContext'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import { MdOutlineLanguage } from 'react-icons/md'

const MobileNavBottom = () => {
    const router = useRouter();
    const themeContext = useContext(GetThemeContext)
    return (

        <div className="fixed lg:hidden z-50 w-full h-16 -translate-x-1/2   bg-Blue  bottom-0 left-1/2 ">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                <button onClick={() => themeContext.setSidebarStatus(true)} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group">
                    <FiSearch className="w-5 h-5 mb-1  text-white  group-hover:text-blue-600 " />
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group">
                    <FiShoppingCart className="w-5 h-5 mb-1  text-white  group-hover:text-blue-600 " />

                </button>
                <div className="flex items-center justify-center">
                    <button onClick={() => router.push('/')} type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">

                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                    </button>
                </div>



                <button type="button" className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-50  group">
                    <MdOutlineLanguage className="w-5 h-5 mb-1  text-white  group-hover:text-blue-600 " />

                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-50  group">
                    <svg className="w-5 h-5 mb-1 text-white  group-hover:text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default MobileNavBottom