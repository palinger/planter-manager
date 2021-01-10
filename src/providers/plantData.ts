import { PlantData, Options } from "./interface";
export const plants = ["leak", "peas", "redCabbage", "brocolli", "pakchoi", "radish", "borax"];
export const plantData: PlantData[] = [
  {
    id: "leak",
    plantName: "Porik",
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
        length: 6,
        lightCycle: "regular",
        waterCycle: "regular",
        ph: 6.6,
        temp: "20 C",
      },
    },
  },
  {
    id: "peas",
    plantName: "Hrasok",
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
        length: 10,
        lightCycle: "regular",
        waterCycle: "regular",
        ph: 6.6,
        temp: "22 C",
      },
    },
  },
  {
    id: "redCabbage",
    plantName: "Red Cabbage",
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
    plantName: "Brokolica",
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
  {
    id: "pakchoi",
    plantName: "Pak Choi",
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
    id: "radish",
    plantName: "Radish",
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
        time: "15min",
        temp: "20 C",
      },
      germination: {
        length: 2,
        time: "48 hours",
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
  {
    id: "borax",
    plantName: "Borax",
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
        length: 1,
        time: "24 hours",
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
    label: "Porik",
    value: "leak",
  },
  {
    label: "Cervena kapusta",
    value: "redCabbage",
  },
  {
    label: "Brocolica",
    value: "brocolli",
  },
  {
    label: "Pak Choi",
    value: "pakchoi",
  },
  {
    label: "Radish",
    value: "radish",
  },
  {
    label: "Borax",
    value: "borax",
  },
];
