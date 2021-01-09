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
  {
    id: "redCabbage",
    plantName: "redCabbage",
    seedWeight: 2.5,
    lightCycle: "normal",
    waterCycle: "normal",
    ph: 7.6,
    cycleData: {
      soakLength: 0,
      germinationLength: 1,
      growLength: 9,
    },
  },
  {
    id: "brocolli",
    plantName: "brokolica",
    seedWeight: 2.5,
    lightCycle: "normal",
    waterCycle: "normal",
    ph: 7.6,
    cycleData: {
      soakLength: 2,
      germinationLength: 1,
      growLength: 12,
    },
  },
];

// const cycleData = {
//   soak: {
//     length: 2,
//     time: "15min",
//     solution: {
//       percentage: "5%",
//       parts: "",
//     },
//     seed: {
//       weight: "5.5g",
//       volume: "100ml",
//     },
//   },
//   germination: {
//     length: 2,
//     temp: "20 C"
//   },
//   grow: {
//     length: 7,
//     lightCycle: "normal",
//     waterCycle: "normal",
//   },
// };

export const options = [
  {
    label: "hrasok",
    value: "peas",
  },
  {
    label: "porik",
    value: "leak",
  },
  {
    label: "Cervena kapusta",
    value: "redCabbage",
  },
  {
    label: "brocolica",
    value: "brocolli",
  },
];
