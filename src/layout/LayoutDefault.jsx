"use client"
import Header, { HeaderNotFixed, HeaderSecondary, HeaderSecondaryNotFixed } from '@/components/header/Header'
import React, { useState } from 'react'
import Provider from './Provider'
import Sidebar from '@/components/sidebar/Sidebar'
import Footer from '@/components/Footer/Footer'
import LoadingPage from '@/components/pages/loding/LoadingPage'
import MomentumScroll from '@/utils/MomentumScroll'
import TopNav from '@/components/header/components/TopNav'
import { NavNotFixed } from '@/components/header/components/Nav'
import MobileNavBottom from '@/components/header/MobileNavBottom'
import CartSidebar from '@/components/cartSidebar/CartSidebar'

const LayoutDefault = ({ children }) => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 2000)
    if (loading) {
        return <LoadingPage />;
    }
    return (
        <Provider>
            <Header />
            <Sidebar />
            <CartSidebar />
            <MomentumScroll>
                <HeaderNotFixed />
                {children}
            </MomentumScroll>
            <Footer />
        </Provider>
    )
}

export default LayoutDefault


export const LayoutSecondary = ({ children }) => {
    const [loading, setLoading] = useState(true);

    // setTimeout(() => {
    //     setLoading(false);
    // }, 2000)
    // if (loading) {
    //     return <LoadingPage />;
    // }
    return (
        <Provider>
            <HeaderSecondary />
            <Sidebar />
            <CartSidebar />
            <MomentumScroll>
                <HeaderSecondaryNotFixed />
                {children}
            </MomentumScroll>
            <Footer />
            <MobileNavBottom />

        </Provider>
    )
}
