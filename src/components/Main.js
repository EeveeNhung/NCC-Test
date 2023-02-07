import React from 'react'
import './main.css'
import Footer from './Footer'
const Main = () => {
  return (
    <div className='main-container'>
        <div className='main'>
        <div className='header'>
            <img className='logo' src='/images/logo.png' alt='logo'></img>
        </div>
        <div className='main-content'>
            <h1 className='title'>Lorem ipsum dolor sit asmet?</h1>
            <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
        </div>
        <div className='elements'>
            <div className='element'>
                <h1>Lorem ipsum dolor sit amet</h1>
                <div className='pharagraph'>
                    <img className='icon' src='/images/css-icon.png' align='left'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                </div>
            </div>
            <div className='element'>
                <h1>Lorem ipsum dolor sit amet</h1>
                <div>
                    <img className='icon' src='/images/html-icon.png' align='left'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                </div>
            </div>
            <div className='element'>
                <h1>Lorem ipsum dolor sit amet</h1>
                <div>
                    <img className='icon' src='/images/url-icon.png'  align='left'></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                </div>
            </div>
        </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Main