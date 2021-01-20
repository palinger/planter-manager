import { PlantData, Options } from "./interface";
export const plants = ["leak", "peas", "redCabbage", "brocolli", "pakchoi", "radish", "borax"];
export const plantData: PlantData[] = [
  {
    id: "leak",
    plantName: "Pórik",
    clean: {
      time: "15 min",
      solution: "3%",
    },
    planting: {
      seedWeight: 3.5,
      unit: "kelimok",
    },
    cycleData: {
      soak: {
        length: 1,
        time: "24 hours",
        temp: "20 C",
      },
      germination: {
        length: 3,
        time: "3 days",
        temp: "20 C",
      },
      grow: {
        length: 11,
        lightCycle: "regular",
        waterCycle: "regular",
        ph: 6.6,
        temp: "20 C",
      },
    },
  },
  {
    id: "peas",
    plantName: "Hrášok",
    clean: {
      time: "15min",
      solution: "3%",
    },
    planting: {
      seedWeight: 7.5,
      unit: "kelimok",
    },
    cycleData: {
      soak: {
        length: 1,
        time: "24 hours",
        temp: "22 C",
      },
      germination: {
        length: 2,
        time: "2 days",
        temp: "22 C",
      },
      grow: {
        length: 12,
        lightCycle: "regular",
        waterCycle: "regular",
        ph: 6.6,
        temp: "22 C",
      },
    },
  },
  {
    id: "redCabbage",
    plantName: "Červená kapusta",
    clean: {
      time: "15 min",
      solution: "3%",
    },
    planting: {
      seedWeight: 3,
      unit: "kelimok",
    },
    cycleData: {
      soak: {
        length: 0,
        time: "none",
        temp: "20 C",
      },
      germination: {
        length: 3,
        time: "3 days",
        temp: "20 C",
      },
      grow: {
        length: 7,
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
      time: "15 min",
      solution: "3%",
    },
    planting: {
      seedWeight: 2.3,
      unit: "kelimok",
    },
    cycleData: {
      soak: {
        length: 0,
        time: "none",
        temp: "20 C",
      },
      germination: {
        length: 2,
        time: "2 days",
        temp: "20 C",
      },
      grow: {
        length: 7,
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
      time: "15 min",
      solution: "3%",
    },
    planting: {
      seedWeight: 3,
      unit: "kelimok",
    },
    cycleData: {
      soak: {
        length: 0,
        time: "none",
        temp: "20 C",
      },
      germination: {
        length: 3,
        time: "3 days",
        temp: "20 C",
      },
      grow: {
        length: 7,
        lightCycle: "regular",
        waterCycle: "regular",
        ph: 6.6,
        temp: "20 C",
      },
    },
  },
  {
    id: "radish",
    plantName: "Reďkovka - Rambo",
    clean: {
      time: "15 min",
      solution: "3%",
    },
    planting: {
      seedWeight: 4,
      unit: "kelimok",
    },
    cycleData: {
      soak: {
        length: 0,
        time: "none",
        temp: "20 C",
      },
      germination: {
        length: 3,
        time: "3 days",
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
    id: "borax",
    plantName: "Borák",
    clean: {
      time: "15 min",
      solution: "3%",
    },
    planting: {
      seedWeight: 3.5,
      unit: "kelimok",
    },
    cycleData: {
      soak: {
        length: 2,
        time: "2 days",
        temp: "20 C",
      },
      germination: {
        length: 4,
        time: "4 days",
        temp: "20 C",
      },
      grow: {
        length: 9,
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
    label: "Hrášok",
    value: "peas",
  },
  {
    label: "Pórik",
    value: "leak",
  },
  {
    label: "Červená kapusta",
    value: "redCabbage",
  },
  {
    label: "Brokolica",
    value: "brocolli",
  },
  {
    label: "Pak Choi",
    value: "pakchoi",
  },
  {
    label: "Reďkovka",
    value: "radish",
  },
  {
    label: "Borák",
    value: "borax",
  },
];
