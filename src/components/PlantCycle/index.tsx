import React from "react";
import PlantEvent from "../PlantEvent";
import { plantData } from "../../providers/plantData";
import moment from "moment";

export type LightCycle = "regular" | "short" | "long";
export type WaterCycle = "regular" | "short" | "long";

interface PlantCycleProps {
  plantName: string;
  harvestDate: string;
}

const PlantCycle = ({ plantName, harvestDate }: PlantCycleProps) => {
  let i: number;
  const soakCycles = [];
  const germinationCycles = [];
  const growCycles = [];
  const calculateDates = (date: any, days: number) => {
    let d = moment(new Date(date));
    let dm = d.subtract(days, "days");
    return dm.format("dddd, MMMM Do YYYY");
  };

  const totalGrowDays =
    plantData[plantName].cycleData.soakLength +
    plantData[plantName].cycleData.germinationLength +
    plantData[plantName].cycleData.growLength;

  for (i = 0; i <= plantData[plantName].cycleData.soakLength; i++) {
    soakCycles.push(
      <PlantEvent
        plantName={plantName}
        calculatedDate={calculateDates(harvestDate, totalGrowDays)}
        id="peas"
        type="soak"
        length={plantData[plantName].cycleData.soakLength}
      />
    );
  }

  for (i = 0; i <= plantData[plantName].cycleData.germinationLength; i++) {
    germinationCycles.push(
      <PlantEvent
        plantName={plantName}
        calculatedDate={calculateDates(
          harvestDate,
          totalGrowDays - plantData[plantName].cycleData.soakLength
        )}
        id="peas"
        type="germination"
        length={plantData[plantName].cycleData.germinationLength}
      />
    );
  }

  for (i = 0; i < plantData[plantName].cycleData.growLength; i++) {
    const startDate = i;
    console.log(i);
    console.log(plantData[plantName].cycleData.growLength);

    growCycles.push(
      <PlantEvent
        plantName={plantName}
        calculatedDate={calculateDates(
          harvestDate,
          totalGrowDays -
            plantData[plantName].cycleData.soakLength -
            plantData[plantName].cycleData.germinationLength
        )}
        id="grow"
        type="grow"
        length={plantData[plantName].cycleData.growLength}
      />
    );
  }

  return (
    <>
      <h1>{plantName}</h1>
      <div className="plantCycle">
        {soakCycles}
        {germinationCycles}
        {growCycles}
      </div>
    </>
  );
};

export default PlantCycle;
