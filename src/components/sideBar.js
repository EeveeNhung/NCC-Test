import React from 'react'
import './sideBar.css'
import { useState} from 'react'
const SideBar = () => {
    const [openSideBar, sideBarState]= useState(false)
    const openMenu = () => {
        sideBarState(!openSideBar)
    }
  return (
    <div className={`sideBar ${openSideBar ? 'open' : ''}`}>
        <img className={`menu-icon ${openSideBar ? 'open' : ''}`}  onClick={openMenu} src='/images/menu-squared-48.png' alt='menu-squared' ></img>
        <a className='home'>Home</a>
        <a>Services</a>
        <a className='active'>News</a>
        <a>Blog</a>
        <a>Contact</a>
    </div>
  )
}

export default SideBar