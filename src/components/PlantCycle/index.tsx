import React from "react";
import PlantEvent from "../PlantEvent";

export type LightCycle = "regular" | "short" | "long";
export type WaterCycle = "regular" | "short" | "long";

interface PlantCycleProps {
  plantName: string;
  soakLength: number;
  germinationLength: number;
  growLength: number;
  seedWeight?: number;
  lightCycle?: LightCycle;
  waterCycle?: WaterCycle;
  ph?: number;
}

const PlantCycle = (props: PlantCycleProps) => {
  return (
    <>
      <h1>{props.plantName}</h1>
      <div className="plantCycle">
      <PlantEvent
          plantName="hrasok"
          id="peas"
          type="soak"
          length={props.soakLength}
        />
        <PlantEvent
          plantName="hrasok"
          id="peas"
          type="germination"
          length={props.germinationLength}
        />
        <PlantEvent
          plantName="hrasok"
          id="peas"
          type="grow"
          length={props.growLength}
        />
      </div>
    </>
  );
};

export default PlantCycle;
