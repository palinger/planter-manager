export type CycleData = {
  soakLength: number;
  germinationLength: number;
  growLength: number;
};

export type PlantData = {
  id: string;
  plantName: string;
  seedWeight: number;
  lightCycle: string;
  waterCycle: string;
  ph: number;
  cycleData: CycleData;
};

export const plantData: PlantData[] = [
  {
    id: "leak",
    plantName: "porik",
    seedWeight: 2.5,
    lightCycle: "normal",
    waterCycle: "normal",
    ph: 6.6,
    cycleData: {
      soakLength: 1,
      germinationLength: 1,
      growLength: 5,
    },
  },
  {
    id: "peas",
    plantName: "hrasok",
    seedWeight: 2.5,
    lightCycle: "normal",
    waterCycle: "normal",
    ph: 7.6,
    cycleData: {
      soakLength: 2,
      germinationLength: 1,
      growLength: 6,
    },
  },
];

export const options = [
  {
    label: "hrasok",
    value: "peas",
  },
  {
    label: "porik",
    value: "leak",
  },
];
