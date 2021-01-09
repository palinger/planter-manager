import React from "react";
import { ContentProps } from "../../providers/interface";

const GrowInformation = ({ plantObject }: ContentProps) => {
  return (
    <>
      Temperature: {plantObject.cycleData.grow.temp}
      <br />
      Water Ph: {plantObject.cycleData.grow.ph}
      <br />
      LightCycle: {plantObject.cycleData.grow.lightCycle}
      <br />
      WaterCycle: {plantObject.cycleData.grow.waterCycle}
      <br />
    </>
  );
};

export default GrowInformation;
