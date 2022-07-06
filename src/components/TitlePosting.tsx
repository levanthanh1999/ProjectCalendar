import React from 'react'
import { Input } from "antd";
import { EditOutlined } from "@ant-design/icons";

const TitlePosting = () => {
    
    const { TextArea } = Input;

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log("Change:", e.target.value);
      };

  return (
    <>
        <div className="title-of-posting">
            Description
            <button className="btn">
            <EditOutlined />
            </button>
            <div className="sub-des">
            <Input.TextArea
                onChange={onChange}
                id="textarea"
                rows={4}
                defaultValue={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sit, illum dicta, magnam quas velit earum rerum aut totam fugiat atque, mollitia praesentium aperiam doloremque in natus minima voluptas non!"
                }
            />
            </div>
        </div>
    </>
  )
}

export default TitlePosting