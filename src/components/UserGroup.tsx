import React from 'react'
import { PlusOutlined  } from "@ant-design/icons";
import Button from './Button';
import { ButtonStyle } from './ButtonStyle'
import styled from 'styled-components';


const ButtonAdd = styled(ButtonStyle)`
  width: 65px;
  height: 65px;
  border-radius: 50%;
`

interface IUser {
  id: number;
  name: string;
  avatar: string;
  icon?: string;
}

interface UserGroupProps {
  users: IUser[],
  style?: object
}


const UserGroup = ({users, style}: UserGroupProps) => {
  return (
    <>
     
      {users.map((user,index) => <img key={index} src={user.avatar} style={style} />)} 

    <ButtonAdd type='button' > <PlusOutlined style={{ fontSize: 24 }}/> </ButtonAdd>
    </>
  )
}

export default UserGroup