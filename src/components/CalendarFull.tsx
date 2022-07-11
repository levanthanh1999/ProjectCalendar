import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import RenderEventContent from "./RenderEventContent";
import interactionPlugin from "@fullcalendar/interaction";

interface ISchedule {
  title: string;
  description: string;
  date: string;
}

interface CalendarProps {
  onDateClick: (postId: string) => void;
  events: ISchedule[];
}

const CalendarFull = ({ onDateClick, events }: CalendarProps) => {
  const onDateClicked = (e: any) => {
    var selectId = "1";
    onDateClick(selectId);
  };

  console.log(events);

  return (
    <div className="calender">
      <FullCalendar
        plugins={[interactionPlugin, dayGridPlugin]}
        selectable={true}
        firstDay={1}
        initialView="dayGridMonth"
        aspectRatio={1.6}
        dateClick={(e) => onDateClicked(e)}
        events={events}
        eventContent={RenderEventContent}
      />
    </div>
  );
};

export default CalendarFull;
