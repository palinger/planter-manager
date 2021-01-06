import React from "react";
import PlantEvent from "../PlantEvent";
import { plantData } from "../../providers/plantData";
import moment from "moment";

export type LightCycle = "regular" | "short" | "long";
export type WaterCycle = "regular" | "short" | "long";

interface PlantCycleProps {
  id: string;
  harvestDate: string;
}

const PlantCycle = ({ id, harvestDate }: PlantCycleProps) => {

  let totalGrowDays: number = 0;
  let cycles: any = [];

  const calculateDates = (date: any, days: number) => {
    let d = moment(new Date(date));
    let dm = d.subtract(days, "days");
    return dm.format("ddd, MMM Do YYYY");
  };

  plantData.map((item) => {
    if (item.id === id) {
      totalGrowDays =
        item.cycleData.soakLength +
        item.cycleData.germinationLength +
        item.cycleData.growLength;
    }
  });

  plantData.map((item, index) => {
    if (item.id === id) {
      new Array(item.cycleData.soakLength)
        .fill(0)
        .map((loopItem, index: number) => {
          cycles.push(
            <PlantEvent
              key={index}
              plantName={item.plantName}
              calculatedDate={
                index === 0 ? calculateDates(harvestDate, totalGrowDays) : ""
              }
              id={item.id}
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
              plantName={item.plantName}
              calculatedDate={
                index === 0
                  ? calculateDates(
                      harvestDate,
                      totalGrowDays - item.cycleData.soakLength
                    )
                  : ""
              }
              id={item.id}
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
              plantName={item.plantName}
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
              id={item.id}
              type="grow"
              length={item.cycleData.growLength}
            />
          );
        });
    }
  });

  return (
    <>
      
      <div className="plantCycle"><h1>{id}</h1>{cycles}</div>
    </>
  );
};

export default PlantCycle;
