import { ProductContext } from '@/context/ProductContext'
import { ThemeContext } from '@/context/ThemeContext'
import React from 'react'

const Provider = ({ children }) => {
    return (
        <ThemeContext>
            <ProductContext>
                {children}
            </ProductContext>
        </ThemeContext>
    )
}

export default Provider