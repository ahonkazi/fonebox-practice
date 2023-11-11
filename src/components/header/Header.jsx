import React from 'react'
import TopNav from './components/TopNav';
import Nav, { NavNotFixed, NavProduct, NavProductNotFixed, NavSecondary, NavSecondaryNotFixed } from './components/Nav';
const Header = () => {
    return (
        <Nav />
    )
}

export default Header

export const HeaderNotFixed = () => {
    return (
        <>
            <TopNav />
            <NavNotFixed />
        </>
    )
}
export const HeaderProduct = () => {
    return (
        <NavProduct />

    )
}


export const HeaderProductNotFixed = () => {
    return (
        <>
            <TopNav />
            <NavProductNotFixed />
        </>
    )
}
