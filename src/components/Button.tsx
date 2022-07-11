import React, { ReactNode } from 'react';
import { ButtonStyle } from './ButtonStyle'

interface Button {
    type: "button" | "submit" | "reset" | undefined;
    children: ReactNode;
}


const Button = ({type, children}:Button) => {
  return (
    <>
        <ButtonStyle type={type}> {children}  </ButtonStyle>
    </>
  )
}

export default Button