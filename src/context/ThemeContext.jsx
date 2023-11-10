"use client"
import React, { createContext, useState } from "react";

export const GetThemeContext = createContext();
export const ThemeContext = ({ children }) => {
    const [sidebarStatus, setSidebarStatus] = useState(false);
    const [deshtopSearchBarStatus, setdeshtopSearchBarStatus] = useState(false);
    const [cartSidebarStatus, setCartSidebarStatus] = useState(false);
    const menuItems = [
        { title: 'Products', path: '/products' },
        { title: 'Service', path: '/service' },
        { title: 'Industries & Solutions', path: '/industries-and-solutions' },
        { title: 'Support', path: '/support' },
        { title: 'Sales & Partners', path: '/sales-and-partners' },
    ]
    return (
        <GetThemeContext.Provider value={{ cartSidebarStatus, setCartSidebarStatus, sidebarStatus, setSidebarStatus, menuItems, deshtopSearchBarStatus, setdeshtopSearchBarStatus }}>{children}</GetThemeContext.Provider>
    )
}