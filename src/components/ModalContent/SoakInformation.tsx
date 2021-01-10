import React from "react";
import ClockIcon from "@material-ui/icons/Timer";
import { ContentProps } from "../../providers/interface";

const SoakInformation = ({ plantObject }: ContentProps) => {
  return (
    <div className="soakInformation modalBox">
      <h3>Soak</h3>
      <p><ClockIcon /> Time: {plantObject.cycleData.soak.time}</p>
      <hr/>
    </div>
  );
};

export default SoakInformation;
