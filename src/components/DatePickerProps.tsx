import React, { useState } from 'react'
import  { DatePicker, DatePickerProps, TimePicker }  from "antd";
import moment from 'moment';
import type { Moment } from 'moment';
const timeFormat = 'hh:mm';

const DatePickerProp = () => {
    const [dates, setDates] = useState<string>('')
    const [value, setValue] = useState<Moment | null>(null);

    const date = new Date()
    // console.log(date.toLocaleTimeString())

    const onChange = (a: any, time: any) => {
      setValue(time)
    };

    const onChanged: DatePickerProps['onChange'] = (date, dateString) => {
      setDates(dateString);
    };
   
  return (
    <>
    <div className="date-of-time1">
              <DatePicker 
                // value={moment(dates)}
                defaultValue= {moment(date.toLocaleDateString(), 'DD-MM-YYYY')}
                onChange={onChanged}
              />
              <span className="dot">&bull;</span>
              <TimePicker 
                // value={value} 
                onChange={(a, b) => onChange(a, b)}
                defaultValue={moment(date.toLocaleTimeString(), 'HH:mm')}  
              />
    
    </div>
    </>
  )
}

export default DatePickerProp