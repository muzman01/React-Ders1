import React from 'react'
import Logo from './Logo'
import Search from './Search'
import AltMenu from './AltMenu'
import './index.css'
const menu = () => {
    return (
        <div className='menu'>
            <Logo />
            <Search />
            <AltMenu />
        </div>
    )
}

export default menu
