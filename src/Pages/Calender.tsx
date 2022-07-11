import React, { useState } from "react";
import CalendarFull from "../components/CalendarFull";
import Mid from "../components/Mid";
import Right from "../components/Right";

interface ISchedule {
  title: string;
  description: string;
  date: string;
}

const Calender = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateClick = (e: any) => {
    setShowCalendar(true);
  }

  const onCloseRighted = () => {
    setShowCalendar(false);
  }

  const arrEvent: ISchedule[] = [
    {
      title: "Event 1",
      description: "description",
      date: "2022-07-10",
    },
  ];

  return (
    <>
      <div className="mid">
        <Mid />
        <div className="middle">
          <CalendarFull
            onDateClick={(e) => handleDateClick(e)}
            events={arrEvent}
          />
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
