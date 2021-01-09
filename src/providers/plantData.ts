import { PlantData, Options } from "./interface";

export const plantData: PlantData[] = [
  {
    id: "leak",
    plantName: "porik",
    clean: {
      time: "15min",
      solution: "3%",
    },
    planting: {
      seedWeight: 4.5,
      unit: "kelimok",
    },
    cycleData: {
      soak: {
        length: 0,
        time: "30 mins",
        temp: "20 C",
      },
      germination: {
        length: 1,
        time: "24 hours",
        temp: "20 C",
      },
      grow: {
        length: 3,
        lightCycle: "regular",
        waterCycle: "regular",
        ph: 6.6,
        temp: "20 C",
      },
    },
  },
  {
    id: "peas",
    plantName: "hrasok",
    clean: {
      time: "15min",
      solution: "3%",
    },
    planting: {
      seedWeight: 5.5,
      unit: "kelimok",
    },
    cycleData: {
      soak: {
        length: 2,
        time: "48 hours",
        temp: "22 C",
      },
      germination: {
        length: 0,
        time: "1 hour",
        temp: "22 C",
      },
      grow: {
        length: 7,
        lightCycle: "regular",
        waterCycle: "regular",
        ph: 6.6,
        temp: "22 C",
      },
    },
  },
  {
    id: "redCabbage",
    plantName: "redCabbage",
    clean: {
      time: "15min",
      solution: "3%",
    },
    planting: {
      seedWeight: 5.5,
      unit: "kelimok",
    },
    cycleData: {
      soak: {
        length: 1,
        time: "30min",
        temp: "20 C",
      },
      germination: {
        length: 1,
        time: "24 hours",
        temp: "20 C",
      },
      grow: {
        length: 8,
        lightCycle: "regular",
        waterCycle: "regular",
        ph: 6.6,
        temp: "20 C",
      },
    },
  },
  {
    id: "brocolli",
    plantName: "brokolica",
    clean: {
      time: "15min",
      solution: "3%",
    },
    planting: {
      seedWeight: 2.5,
      unit: "kelimok",
    },
    cycleData: {
      soak: {
        length: 0,
        time: "15min",
        temp: "20 C",
      },
      germination: {
        length: 0,
        time: "30 min",
        temp: "20 C",
      },
      grow: {
        length: 4,
        lightCycle: "regular",
        waterCycle: "regular",
        ph: 6.6,
        temp: "20 C",
      },
    },
  },
];

export const options: Options[] = [
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
