import React from "react";
import PlantEvent from "../PlantEvent";
import { plantData } from "../../providers/plantData";

export type LightCycle = "regular" | "short" | "long";
export type WaterCycle = "regular" | "short" | "long";

interface PlantCycleProps {
  plantName: string;
  harvestDate: string;
  soakLength: number;
  germinationLength: number;
  growLength: number;
  seedWeight?: number;
  lightCycle?: LightCycle;
  waterCycle?: WaterCycle;
  ph?: number;
}

const PlantCycle = ({
  plantName,
  harvestDate,
  soakLength,
  germinationLength,
  growLength,
  seedWeight,
  lightCycle,
  waterCycle,
  ph,
}: PlantCycleProps) => {
  const totalGrowDays = soakLength + germinationLength + growLength;

  return (
    <>
      <h1>{plantName}</h1>
      <div className="plantCycle">
        <PlantEvent
          plantName={plantName}
          calculatedDate={harvestDate}
          id="peas"
          type="soak"
          length={soakLength}
        />
        <PlantEvent
          plantName={plantName}
          calculatedDate={harvestDate}
          id="peas"
          type="germination"
          length={germinationLength}
        />
        <PlantEvent
          plantName={plantName}
          calculatedDate={harvestDate}
          id="peas"
          type="grow"
          length={growLength}
        />
      </div>
    </>
  );
};

export default PlantCycle;
