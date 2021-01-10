import React from "react";
import { ContentProps } from "../../providers/interface";
import SolutionIcon from "@material-ui/icons/FormatColorFill";
import ClockIcon from "@material-ui/icons/Timer";
import WeightIcon from "@material-ui/icons/FitnessCenter";
import PerIcon from "@material-ui/icons/Widgets";

const GeneralInformation = ({ plantObject }: ContentProps) => {
  return (
    <div className="generalInformation  modalBox">
        <h3>Cleaning</h3>
        <p>
          <ClockIcon /> Time: {plantObject.clean.time}
        </p>
        <p>
          <SolutionIcon /> Solution: {plantObject.clean.solution}
        </p>
        <hr />
        <h3>Planting </h3>
        <p>
          <WeightIcon /> Seed weight: {plantObject.planting.seedWeight}
        </p>
        <p>
          <PerIcon /> Unit: {plantObject.planting.unit}
        </p>
        <hr />
      </div>

  );
};

export default GeneralInformation;
