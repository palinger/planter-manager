import React from "react";
import ClockIcon from "@material-ui/icons/Timer";
import { ContentProps } from "../../providers/interface";

const GermInformation = ({ plantObject }: ContentProps) => {
  return (
    <div className="germInformation modalBox">
      <h3>Germination</h3>
      <p><ClockIcon /> Time: {plantObject.cycleData.germination.time}</p>
      <hr/>
    </div>
  );
};

export default GermInformation;
