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
      return (totalGrowDays =
        item.cycleData.soak.length +
        item.cycleData.germination.length +
        item.cycleData.grow.length);
    }
    return null
  });

  plantData.map((item, index) => {
    if (item.id === id) {
      new Array(item.cycleData.soak.length)
        .fill(0)
        .map((loopItem, index: number) => {
          return cycles.push(
            <PlantEvent
              key={index}
              plantName={item.plantName}
              calculatedDate={
                index === 0 ? calculateDates(harvestDate, totalGrowDays) : ""
              }
              id={item.id}
              type="soak"
              length={item.cycleData.soak.length}
              isFirst={index === 0 ? true : false}
            />
          );
        });

      new Array(item.cycleData.germination.length)
        .fill(0)
        .map((loopItem, index: number) => {
          return cycles.push(
            <PlantEvent
              key={index + 50}
              plantName={item.plantName}
              calculatedDate={
                index === 0
                  ? calculateDates(
                      harvestDate,
                      totalGrowDays - item.cycleData.soak.length
                    )
                  : ""
              }
              id={item.id}
              type="germination"
              length={item.cycleData.germination.length}
              isFirst={index === 0 ? true : false}
            />
          );
        });

      new Array(item.cycleData.grow.length)
        .fill(0)
        .map((loopItem, index: number) => {
          return cycles.push(
            <PlantEvent
              key={index + 100}
              plantName={item.plantName}
              calculatedDate={
                index === 0
                  ? calculateDates(
                      harvestDate,
                      totalGrowDays -
                        item.cycleData.soak.length -
                        item.cycleData.germination.length
                    )
                  : ""
              }
              id={item.id}
              type="grow"
              length={item.cycleData.grow.length}
              isFirst={index === 0 ? true : false}
            />
          );
        });
      return null
    } else return null
  });

  return (
    <>
      <div className="plantCycle">
        <h2>{id}</h2>
        {cycles}
      </div>
    </>
  );
};

export default PlantCycle;
