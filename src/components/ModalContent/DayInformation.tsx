import React from "react";
import DayIcon from "@material-ui/icons/Today";

interface DayInformationProps { 
  date: string
}

const DayInformation = ({ date }: DayInformationProps) => {
  return (
    <div className="dayInformation modalBox">
      <p><DayIcon /> <b>{date}</b></p>
    </div>
  );
};

export default DayInformation;
