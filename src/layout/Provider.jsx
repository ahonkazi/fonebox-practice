import { ThemeContext } from '@/context/ThemeContext'
import React from 'react'

const Provider = ({ children }) => {
    return (
        <ThemeContext>
            {children}
        </ThemeContext>
    )
}

export default Provider