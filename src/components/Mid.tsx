import React from "react";
import "../scss/calendar.scss";
import PostMid from "./PostMid";
import InfomationMid from "./InfomationMid";
import UserGroup from "./UserGroup";
import DataUser from "./DataUser";

const Mid = () => {
  return (
    <div>
      <div className="middle">
        <div className="list-avt">
          <UserGroup users={DataUser} style={{height: "65px", width: '65px', borderRadius:'50%', marginRight: '10px'}}/>
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
