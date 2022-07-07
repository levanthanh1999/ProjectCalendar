import React from "react";
import "../scss/calendar.scss";
import CalendarFull from "./CalendarFull";
import HeaderMid from "./HeaderMid";
import PostMid from "./PostMid";
import InfomationMid from "./InfomationMid";



const Mid = () => {
  return (
    <div>
      <div className="middle">
        <div className="list-avt">
            <HeaderMid />
        </div>
        <div className="post">
          <PostMid />
        </div>
        <div className="information">
          <InfomationMid />
        </div>
      </div>
    </div>
  );
};

export default Mid;
