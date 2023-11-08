import Header from '@/components/header/Header'
import React from 'react'
import Provider from './Provider'
import Sidebar from '@/components/sidebar/Sidebar'
import Footer from '@/components/Footer/Footer'

const LayoutDefault = ({ children }) => {
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