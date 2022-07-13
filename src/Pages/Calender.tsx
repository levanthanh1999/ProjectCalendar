import React, { useState } from "react";
import { date } from "yup";
import Mid from "../components/Mid";
import Right from "../components/Right";
import avt1 from '../assets/avt1.jpg'
import avt2 from '../assets/avt2.jpg'
import avt3 from '../assets/avt3.jpg'
import avt4 from '../assets/avt4.jpg'
import CalendarFull from "../components/CalendarFull";



interface ISchedule {
  id: number;
  title: string;
  description: string;
  date: string;
  avt: any;
}

const Calender = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateClick = () => {
    setShowCalendar(true);
  }

  const onCloseRighted = () => {
    setShowCalendar(false);
  }

  const arrEvent: ISchedule[] = [
    {
      id: 1,
      title: "Event 1",
      description: "description",
      date: "2022-07-10",
      avt: [avt1, avt2, avt3, avt4],
    },
    {
      id: 2,
      title: "Event 2",
      description: "description",
      date: "2022-07-13",
      avt: [avt1, avt2, avt3, avt4],
    }
  ];

  return (
    <>
      <div className="mid">
        <Mid />
        <div className="middle">
          <CalendarFull
            onDateClick={handleDateClick}
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
