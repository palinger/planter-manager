import React from "react";
import { ModalSelection } from "../../providers/context";
import SoakInformation from "./SoakInformation";
import GeneralInformation from "./GeneralInformation";
import GermInformation from "./GermInformation";
import GrowInformation from "./GrowInformation";
import DayInformation from "./DayInformation";
import { plantData } from "../../providers/plantData";

interface ModalContentProps {
  variants: ModalSelection;
}

const ModalContent = ({ variants }: ModalContentProps) => {
  let selected = plantData.filter((item) => item.id === variants.id);
  let selectedPlant = selected[0];
  let hasSoak: boolean = selectedPlant.cycleData.soak.length > 0;
  let hasGermination: boolean = selectedPlant.cycleData.germination.length > 0;

  if (variants.type === "soak") {
    return (
      <>
        <DayInformation date={variants.date} />
        <GeneralInformation plantObject={selectedPlant} />
        <SoakInformation plantObject={selectedPlant} />
      </>
    );
  }

  if (variants.type === "germination") {
    if (hasSoak) {
      return (
        <>
          <DayInformation date={variants.date} />
          <GermInformation plantObject={selectedPlant} />
        </>
      );
    } else
      return (
        <>
          <DayInformation date={variants.date} />
          <GeneralInformation plantObject={selectedPlant} />
          <GermInformation plantObject={selectedPlant} />
        </>
      );
  } else {
    if (hasSoak && !hasGermination) {
      return (
        <>
          <DayInformation date={variants.date} />
          <GermInformation plantObject={selectedPlant} />
          <GrowInformation plantObject={selectedPlant} />
        </>
      );
    }
    if (!hasSoak && hasGermination) {
      return (
        <>
          <DayInformation date={variants.date} />
          <GrowInformation plantObject={selectedPlant} />
        </>
      );
    }
    if (!hasSoak && !hasGermination) {
      return (
        <>
          <DayInformation date={variants.date} />
          <GeneralInformation plantObject={selectedPlant} />
          <SoakInformation plantObject={selectedPlant} />
          <GermInformation plantObject={selectedPlant} />
          <GrowInformation plantObject={selectedPlant} />
        </>
      );
    } else {
      return (
        <>
          <GrowInformation plantObject={selectedPlant} />
        </>
      );
    }
  }
};

export default ModalContent;
