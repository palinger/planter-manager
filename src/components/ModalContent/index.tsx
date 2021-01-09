import React from "react";
import { ModalSelection } from "../../providers/context";
import SoakInformation from "./SoakInformation";
import GeneralInformation from "./GeneralInformation";
import GermInformation from "./GermInformation";
import GrowInformation from "./GrowInformation";

import { plantData } from "../../providers/plantData";

interface ModalContentProps {
  variants: ModalSelection;
}

const ModalContent = ({ variants }: ModalContentProps) => {
  let selected = plantData.filter((item) => item.id === variants.id);
  console.log();
  let hasSoak: boolean = selected[0].cycleData.soak.length > 0;
  let hasGermination: boolean = selected[0].cycleData.germination.length > 0;

  if (variants.type === "soak") {
    return (
      <div>
        <GeneralInformation plantObject={selected[0]} />
        <SoakInformation plantObject={selected[0]} />
        <br />
      </div>
    );
  }

  if (variants.type === "germination") {
    if (hasSoak) {
      return <GermInformation plantObject={selected[0]} />;
    } else
      return (
        <pre>
          <GeneralInformation plantObject={selected[0]} />
          <SoakInformation plantObject={selected[0]} />
          <GermInformation plantObject={selected[0]} />
        </pre>
      );
  } else {
    if (hasSoak && !hasGermination) {
      return (
        <pre>
          <GermInformation plantObject={selected[0]} />
          <GrowInformation plantObject={selected[0]} />
        </pre>
      );
    }
    if (!hasSoak && hasGermination) {
      return (
        <pre>
          <SoakInformation plantObject={selected[0]} />
          <GrowInformation plantObject={selected[0]} />
        </pre>
      );
    }
    if (!hasSoak && !hasGermination) {
      return (
        <pre>
          <SoakInformation plantObject={selected[0]} />
          <GermInformation plantObject={selected[0]} />
          <GrowInformation plantObject={selected[0]} />
        </pre>
      );
    } else {
      return (
        <pre>
          <GrowInformation plantObject={selected[0]} />
        </pre>
      );
    }
  }
};

export default ModalContent;
