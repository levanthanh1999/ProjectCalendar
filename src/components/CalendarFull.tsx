import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import RenderEventContent from "./RenderEventContent";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarFull = () => {
  const handleDateClick = (e: any) => {
   
  };
  
  return (
    <>
    <FullCalendar
            plugins={[interactionPlugin, dayGridPlugin]}
            selectable={true}
            firstDay={1}
            initialView="dayGridMonth"
            aspectRatio={1.6}
            
            dateClick={(e) => handleDateClick(e)}
            events={[
              {
                title: "Event 1",
                description: "asdasd",
                date: "2022-07-04",
              },
              {
                title: "Event 2",
                description: "asdasdasd",
                date: "2022-07-05",
              },
            ]}
            eventContent={RenderEventContent}
          />
    </>
  )
}

export default CalendarFull