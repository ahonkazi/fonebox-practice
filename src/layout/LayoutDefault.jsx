"use client"
import Header from '@/components/header/Header'
import React, { useState } from 'react'
import Provider from './Provider'
import Sidebar from '@/components/sidebar/Sidebar'
import Footer from '@/components/Footer/Footer'
import LoadingPage from '@/components/pages/loding/LoadingPage'

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
            {children}
            <Footer />
        </Provider>
    )
}

export default LayoutDefault