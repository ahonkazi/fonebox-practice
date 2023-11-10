import React from 'react'
import TopNav from './components/TopNav';
import Nav, { NavNotFixed } from './components/Nav';
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
