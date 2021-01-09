
export type LightCycle = "regular" | "short" | "long";
export type WaterCycle = "regular" | "short" | "long";

export type Clean = {
  time: string;
  solution: string;
};

export type Planting = {
  seedWeight: number,
  unit: string
};

export type Soak = {
  length: number;
  time: string;
  temp: string;
};

export type Germination = {
  length: number;
  time: string;
  temp: string;
}

export type Grow = {
  length: number,
  temp: string;
  ph: number;
  lightCycle: LightCycle,
  waterCycle: WaterCycle,
}

export type CycleData = {
  soak: Soak;
  germination: Germination;
  grow: Grow;
};

export type PlantData = {
  id: string;
  plantName: string;
  clean: Clean;
  planting: Planting;
  cycleData: CycleData;
};

export type Options = {
  label: string;
  value: string;
}

export interface ContentProps {
  plantObject: PlantData
}