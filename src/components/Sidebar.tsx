import React from 'react'
import Navigation from './Navigation'
import Signout from '../Pages/Signout'
import '../scss/sidebar.scss'
import  logo  from '../assets/logo.png'



const Sidebar = () => {
  return (
    <>
      <img src={logo}  alt='logo-app' className='logo-app' />
      <Navigation />
      <Signout />
    </>
  )
}

export default Sidebar