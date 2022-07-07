import React, { useState } from "react";
import CalendarFull from "../components/CalendarFull";
import Mid from "../components/Mid";
import Right from "../components/Right";
import CloseRight from "../components/CloseRight";

const Calender = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateClick = (e: any) => {
    setShowCalendar(true);
  }

  const onCloseRighted = () => {
    setShowCalendar(false);
  }

  return (
    <>
      <div className="mid">
        <Mid />
        <div className="middle">
          <CalendarFull onDateClick={(e) => handleDateClick(e)} />
        </div>
      </div>

      {showCalendar && (
        <div className="right">
          <Right />
          <button className="btn-closeRight" onClick={onCloseRighted}>
            X
          </button>
        </div>
      )}
    </>
  );
};

export default Calender;
