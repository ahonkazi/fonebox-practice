import Header from '@/components/header/Header'
import React from 'react'
import Provider from './Provider'
import Sidebar from '@/components/sidebar/Sidebar'

const LayoutDefault = ({ children }) => {
    return (
        <Provider>
            <Header />
            <Sidebar />
            {children}
        </Provider>
    )
}

export default LayoutDefault