import React from 'react'
import { PlusOutlined  } from "@ant-design/icons";
import avt1 from "../assets/avt1.jpg";

const HeaderMid = () => {
  return (
    <>
    <img src={avt1} alt="" className="avatar" />
          <img src={avt1} alt="" className="avatar" />
          <img src={avt1} alt="" className="avatar" />
          <img src={avt1} alt="" className="avatar" />
          <button className="btn-add-avt" >
                <PlusOutlined style={{ fontSize: 24}}/> 
          </button>
    </>
  )
}

export default HeaderMid