import React from 'react'
import { LogoutOutlined } from '@ant-design/icons'
import  avt1  from '../assets/avt1.jpg'
import Button from '../components/Button'


const Signout = () => {
  return (
    <div className='box'> 
        <img src={avt1} alt="avatar-sidebar" className='avatar-sidebar'/>
        <h3 className='box-name'>Name</h3>
        <p>Email</p>
      <div className='btn'>
        
        <Button
  
        type='button'><LogoutOutlined /> Signout</Button>
    
      </div>
    </div>
  )
}

export default Signout