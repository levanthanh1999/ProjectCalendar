import React from 'react'
import { LogoutOutlined } from '@ant-design/icons'
import  avt1  from '../assets/avt1.jpg'

const Signout = () => {
  return (
    <div className='box'> 
        <img src={avt1} alt="avatar-sidebar" className='avatar-sidebar'/>
        <h3 className='box-name'>Name</h3>
        <p>Email</p>
      <div className='btn'>
      <button className='btn-signout'><LogoutOutlined /> Signout</button>
      </div>
    </div>
  )
}

export default Signout