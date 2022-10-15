import React, { useState } from 'react'
import logo from '../images/logo.svg'
import menuBar from '../images/icon-hamburger.svg'
import closeMenu from '../images/icon-close.svg'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
        <header className='absolute z-10 p-8 w-full flex items-center justify-center'>
            <div>
                <img src={logo} alt="header logo" />
            </div>
            <nav className={ `${open ? 'open w-full  py-8' : ''}`}>
              <ul className= 'flex items-center justify-center flex-wrap gap-5   lg:text-3xl lg:text-slate-900 opacity-70' >
                <li><button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-500'>home</button></li>
                <li><button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-500'>shop</button></li>
                <li><button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-500'>about</button></li>
                <li><button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-500'>contact</button></li>
              </ul>
            </nav>
            <div className='absolute top-8 left-8 z-20'>
              {
                open ? (
                  <button onClick={() => setOpen(false)}><img src={closeMenu} alt="open-menu" /></button>
                ) : (
                  <button onClick={() => setOpen(true)}><img src={menuBar} alt="close menu" /></button>
                )
              }
            </div>
        </header>
    </>
  )
}

export default Header