import React from "react";
import { ContentProps } from "../../providers/interface";


const SoakInformation = ({plantObject}:ContentProps ) => {
  console.log(plantObject)
  return (
    <>
      <br />
      Soak:{plantObject.cycleData.soak.time}
      <br />
      ------------------------
    </>
  );
};

export default SoakInformation;
