import React from "react";
import { ContentProps } from "../../providers/interface";
import TempIcon from "@material-ui/icons/WbSunny";
import PHIcon from "@material-ui/icons/Opacity";
import WaterIcon from "@material-ui/icons/Waves";
import LightsIcon from "@material-ui/icons/WbIncandescent";
import ClockIcon from "@material-ui/icons/Timer";

const GrowInformation = ({ plantObject }: ContentProps) => {
  return (
    <div className="growInformation modalBox">
      <h3>Grow</h3>
      <p><ClockIcon /> Time: {plantObject.cycleData.grow.length} days</p>
      <p><TempIcon /> Temperature: {plantObject.cycleData.grow.temp}</p>
      <p><PHIcon /> Water Ph: {plantObject.cycleData.grow.ph}</p>
      <p><LightsIcon /> LightCycle: {plantObject.cycleData.grow.lightCycle}</p>
      <p><WaterIcon /> WaterCycle: {plantObject.cycleData.grow.waterCycle}</p>
    </div>
  );
};

export default GrowInformation;
