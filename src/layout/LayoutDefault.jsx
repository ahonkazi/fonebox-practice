"use client"
import Header, { HeaderNotFixed } from '@/components/header/Header'
import React, { useState } from 'react'
import Provider from './Provider'
import Sidebar from '@/components/sidebar/Sidebar'
import Footer from '@/components/Footer/Footer'
import LoadingPage from '@/components/pages/loding/LoadingPage'
import MomentumScroll from '@/utils/MomentumScroll'
import TopNav from '@/components/header/components/TopNav'
import { NavNotFixed } from '@/components/header/components/Nav'

const LayoutDefault = ({ children }) => {
    const [loading, setLoading] = useState(true);

    // setTimeout(() => {
    //     setLoading(false);
    // }, 2000)
    // if (loading) {
    //     return <LoadingPage />;
    // }
    return (
        <Provider>
            <Header />
            <Sidebar />
            <MomentumScroll>
                <HeaderNotFixed />
                {children}
                <Footer />
            </MomentumScroll>
        </Provider>
    )
}

export default LayoutDefault