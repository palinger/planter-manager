import React from "react";
import DayIcon from "@material-ui/icons/Today";
import MoreIcon from "@material-ui/icons/MoreHoriz";

const Legend = () => {
  return (
    <div className="legend">
      <div className="clickable">
        <div className="plantEvent">
          <span className="soak">
            <DayIcon />
          </span>
          - Soak Event
        </div>
        <div className="plantEvent">
          <span className="germination">
            <DayIcon />
          </span>
          - Germination Event
        </div>
        <div className="plantEvent">
          <span className="grow">
            <DayIcon />
          </span>
          - Grow Event
        </div>
      </div>
      <div className="nonClickable">
        <div className="plantEvent">
          <span className="soak">
            <MoreIcon />
          </span>
        </div>
        <div className="plantEvent">
          <span className="germination">
            <MoreIcon />
          </span>
        </div>
        <div className="plantEvent">
          <span className="grow">
            <MoreIcon />
          </span>
        </div>
        - Continuation Events
      </div>
    </div>
  );
};

export default Legend;
