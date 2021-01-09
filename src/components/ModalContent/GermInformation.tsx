import React from "react";
import { ContentProps } from "../../providers/interface";


const GermInformation = ({plantObject}:ContentProps ) => {
  return (
    <>
      <br />
      Germination: {plantObject.cycleData.germination.time}
      <br />
      ------------------------
    </>
  );
};

export default GermInformation;
