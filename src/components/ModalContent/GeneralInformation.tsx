import React from "react";
import { ContentProps } from "../../providers/interface";

const GeneralInformation = ({plantObject}: ContentProps) => {
  return (
    <>
      Cleaning: cleaning time: {plantObject.clean.time}
      <br />
      cleaning solution: {plantObject.clean.solution}
      <br />
      ------------------------
      <br />
      Planting: <br />
      Seed weight: {plantObject.planting.seedWeight}
      <br />
      per: {plantObject.planting.unit}
      <br />
    </>
  );
};

export default GeneralInformation;
