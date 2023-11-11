"use client"
import Header, { HeaderNotFixed, HeaderProduct, HeaderProductNotFixed } from '@/components/header/Header'
import React, { useEffect, useState } from 'react'
import Provider from './Provider'
import Sidebar from '@/components/sidebar/Sidebar'
import Footer from '@/components/Footer/Footer'
import LoadingPage from '@/components/pages/loding/LoadingPage'
import MomentumScroll from '@/utils/MomentumScroll'
import TopNav from '@/components/header/components/TopNav'
import { NavNotFixed } from '@/components/header/components/Nav'
import MobileNavBottom from '@/components/header/MobileNavBottom'
import CartSidebar from '@/components/cartSidebar/CartSidebar'
import { FilterSidebar } from '@/app/(routes)/products/_components/Filter/Filter'

const LayoutDefault = ({ children }) => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 2000)

    return (
        <>
            {loading && (
                <LoadingPage />

            )}
            <Provider>
                <Header />
                <Sidebar />
                <CartSidebar />
                <MomentumScroll>
                    <HeaderNotFixed />
                    {children}
                    <Footer />
                </MomentumScroll>

            </Provider>
        </>
    )
}

export default LayoutDefault


export const LayoutProducts = ({ children }) => {
    const [loading, setLoading] = useState(true);


    setTimeout(() => {
        setLoading(false);
    }, 2100)

    return (
        <>
            {loading && (
                <LoadingPage />

            )}
            <Provider>
                <HeaderProduct />
                <Sidebar />
                <FilterSidebar />
                <CartSidebar />
                <MomentumScroll>
                    <HeaderProductNotFixed />
                    {children}
                    <Footer />
                </MomentumScroll>
                <MobileNavBottom />

            </Provider>
        </>
    )
}
