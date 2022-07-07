import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import RenderEventContent from "./RenderEventContent";
import interactionPlugin from "@fullcalendar/interaction";

interface CalendarPostingProp {
  onDateClick: (postId: string) => void
}
const CalendarFull = ({onDateClick}: CalendarPostingProp) => {

  const event = 
  [{
    title: "Event 1",
    description: "asdasd",
    date: "2022-07-04",
  },
  {
    title: "Event 2",
    description: "asdasdasd",
    date: "2022-07-23",
  },
  {
    title: "Event 3",
    description: "asdasdasd",
    date: "2022-07-15",
  }]


  const onDateClicked = (e: any) => {
      var selectId = '1'
      onDateClick(selectId)
  }
  
  return (
    <div className="calender">
    <FullCalendar
            plugins={[interactionPlugin, dayGridPlugin]}
            selectable={true}
            firstDay={1}
            initialView="dayGridMonth"
            aspectRatio={1.6}
            dateClick={(e) => onDateClicked(e)}
            events={event}
            eventContent={RenderEventContent}
          />
    </div>

  )
}

export default CalendarFull