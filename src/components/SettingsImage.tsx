import React from 'react'
import image1 from "../assets/image1.jpg";
import { DeleteOutlined } from "@ant-design/icons";

const SettingsImage = () => {
  return (
    <>
        <div className='SettingImage'>
          Image
        <button className="btn btn-clear">
          <DeleteOutlined style={{ fontSize: 15 }} />
        </button>
        <div className="Image">
          <img src={image1} alt="image1" className="image1" />
        </div>
      </div>
    </>
  )
}

export default SettingsImage