import React from "react";
import avt1 from "../assets/avt1.jpg";

const renderEventContent = (eventInfo: any) => {
  return (
    <div>
      {/* <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i> */}

      <img
        src={avt1}
        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
        alt="avtcalendar"
      />

      <img
        src={avt1}
        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
      />
      
    </div>
  );
};

export default renderEventContent;
