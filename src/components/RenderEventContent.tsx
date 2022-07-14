import React from "react";

import DataUser from "./DataUser";

const renderEventContent = (eventInfo: any) => {
  return (
    <div>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
      {DataUser.map((data,index) => <img
        key={index}
        src={data.avatar}
        style={{ width: "30px", height: "30px", borderRadius: "5px" }}
        alt="avtcalendar"
      /> )}
    </div>
  );
};

export default renderEventContent;
