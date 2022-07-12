import React, { useState } from 'react'
import  { DatePicker, DatePickerProps }  from "antd";
import moment from 'moment';
import { TimePicker } from 'antd';
import type { Moment } from 'moment';


const DatePickerProp = () => {
    const [dates, setDates] = useState<string>('')
    const [value, setValue] = useState<Moment | null>(null);

    const date = new Date()

    // const onChange = (time: Moment) => {
    //   setValue(time);
    // };

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
      console.log(dateString)
      setDates(dateString);
    };
   

  return (
    <>
    <div className="date-of-time1">
              <DatePicker 
                defaultValue= {moment(date.toLocaleDateString(), 'DD-MM-YYYY')}
                onChange={onChange}
              />
              <span className="dot">&bull;</span>
              <TimePicker 
                value={value} 
                // onChange={onChange} 
                defaultValue={moment(date.toLocaleTimeString(), 'HH:mm')}
              />
    
    </div>
    </>
  )
}

export default DatePickerProp