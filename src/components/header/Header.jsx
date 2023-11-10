import React from 'react'
import TopNav from './components/TopNav';
import Nav, { NavNotFixed, NavSecondary, NavSecondaryNotFixed } from './components/Nav';
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
export const HeaderSecondary = () => {
    return (
        <NavSecondary />

    )
}


export const HeaderSecondaryNotFixed = () => {
    return (
        <>
            <TopNav />
            <NavSecondaryNotFixed />
        </>
    )
}
