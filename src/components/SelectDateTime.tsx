import React from 'react'
import { EditOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import TimeDate from "./TimeDate";
import "antd/dist/antd.min.css";


const SelectDateTime = () => {
  return (
    <>
        <div className="date">
          <h4 className="title-date"> Date of Posting </h4>

          <button className="btn">
            <PlusSquareOutlined style={{ fontSize: 15 }} />
          </button>
        </div>

        <div className="date-of-time1">
          <DatePicker />
          <span className="dot">&bull;</span>
          <TimeDate />
        </div>
        <div className="date-of-time1">
          <DatePicker />
          <span className="dot">&bull;</span>
          <TimeDate />
        </div>
    </>
  )
}

export default SelectDateTime