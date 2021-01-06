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

  let totalGrowDays: number = 0;
  let cycles: any = [];

  const calculateDates = (date: any, days: number) => {
    let d = moment(new Date(date));
    let dm = d.subtract(days, "days");
    return dm.format("ddd, MMM Do YYYY");
  };

  plantData.map((item) => {
    if (item.id === plantName) {
      totalGrowDays =
        item.cycleData.soakLength +
        item.cycleData.germinationLength +
        item.cycleData.growLength;
    }
  });

  plantData.map((item, index) => {
    if (item.id === plantName) {
      new Array(item.cycleData.soakLength)
        .fill(0)
        .map((loopItem, index: number) => {
          cycles.push(
            <PlantEvent
              key={index}
              plantName={plantName}
              calculatedDate={
                index === 0 ? calculateDates(harvestDate, totalGrowDays) : ""
              }
              id="peas"
              type="soak"
              length={item.cycleData.soakLength}
            />
          );
        });

      new Array(item.cycleData.germinationLength)
        .fill(0)
        .map((loopItem, index: number) => {
          cycles.push(
            <PlantEvent
              key={index + 50}
              plantName={plantName}
              calculatedDate={
                index === 0
                  ? calculateDates(
                      harvestDate,
                      totalGrowDays - item.cycleData.soakLength
                    )
                  : ""
              }
              id="peas"
              type="germination"
              length={item.cycleData.germinationLength}
            />
          );
        });

      new Array(item.cycleData.growLength)
        .fill(0)
        .map((loopItem, index: number) => {
          cycles.push(
            <PlantEvent
              key={index + 100}
              plantName={plantName}
              calculatedDate={
                index === 0
                  ? calculateDates(
                      harvestDate,
                      totalGrowDays -
                        item.cycleData.soakLength -
                        item.cycleData.germinationLength
                    )
                  : ""
              }
              id="grow"
              type="grow"
              length={item.cycleData.growLength}
            />
          );
        });
    }
  });

  return (
    <>
      <h1>{plantName}</h1>
      <div className="plantCycle">{cycles}</div>
    </>
  );
};

export default PlantCycle;
