import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import RenderEventContent from "./RenderEventContent";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch } from "react-redux";
import { saveValueImage } from "../redux/reducers/ValueImage";

interface ISchedule {
  title: string;
  description: string;
  date: string;
}

interface CalendarProps {
  onDateClick: (postId: String) => void;
  events: ISchedule[];
}

const CalendarFull = ({ onDateClick, events }: CalendarProps) => {
  const dispatch = useDispatch();
  const [valueImage, setValueImage] = useState<any>("");

  const onDateClicked = (e: any) => {
    var selectId = "1";
    onDateClick(selectId);
  };

  console.log(events);

  const valueEvent = (e: any) => {
    //console.log(e.event._def.extendedProps.avt)
    // setValueImage(e.event._def.extendedProps.avt);
    dispatch(saveValueImage(e.event._def.extendedProps.avt))
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
          events={events}
          eventClick={valueEvent}
          eventContent={RenderEventContent}
        />
      </div>
    );
};
export default CalendarFull;
