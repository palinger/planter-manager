type PlantData = {
  cycleData: {
    plantName: string;
    soakLength: number;
    germinationLength: number;
    growLength: number;
  },
  seedWeight: number;
  lightCycle: string;
  waterCycle: string;
  ph: number;
}

type PlantDataCollection = {
  peas: PlantData;
  leak: PlantData;
}

export const plantData: PlantDataCollection = {
  peas: {
    cycleData: {
      plantName: "hrasok",
      soakLength: 1,
      germinationLength: 1,
      growLength: 2,
    },
    seedWeight: 3.5,
    lightCycle: "normal",
    waterCycle: "normal",
    ph: 6.6,
  },
  leak: {
    cycleData: {
      plantName: "porik",
      soakLength: 1,
      germinationLength: 4,
      growLength: 2,
    },
    seedWeight: 2.5,
    lightCycle: "normal",
    waterCycle: "normal",
    ph: 6.6,
  },
};

export const options = [
  
  {
    label: "hrasok",
    value: "peas"
  },
  {
    label: "porik",
    value: "leak"
  }
]