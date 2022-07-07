import React from "react";
import "../scss/right.scss";
import "antd/dist/antd.min.css";
import SettingsImage from "./SettingsImage";
import TitlePosting from "./TitlePosting";
import SelectDateTime from "./SelectDateTime";
import TagList from "./TagList";
import CloseRight from "./CloseRight";

const Right = () => {

  return (
    <div className="rights">
      <div className="title-postsettings">
        <h1 className="title-postting">Post Settings</h1>
      </div>
      <div className='SettingsImage'>
        <SettingsImage />
      </div>
      
      <div className='TitlePosting'> 
        <TitlePosting />
      </div>

      <div className="title-of-posting">
        <SelectDateTime />
        <TagList />
      </div>
      
    </div>
  );
};

export default Right;
