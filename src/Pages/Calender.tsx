import React, { useState } from "react";
import CalendarFull from "../components/CalendarFull";
import Mid from "../components/Mid";
import Right from "../components/Right";

const Calender = () => {
  const [selectId, setSelectId] = useState("1");
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateClick = (e: any) => {
    setSelectId(e);
    setShowCalendar(true);
  };

  return (
    <>
      <div className="mid">
        <Mid />
        <div className='middle'>
        <CalendarFull onDateClick={(e) => handleDateClick(e)} /></div>
      </div>

      {showCalendar && (
        <div className="right">
          <Right />
        </div>
      )}
    </>
  );
};

export default Calender;
