import React from "react";
import { ContentProps } from "../../providers/interface";


const SoakInformation = ({plantObject}:ContentProps ) => {
  console.log(plantObject)
  return (
    <pre className="soa">
      <br />
      Soak:{plantObject.cycleData.soak.time}
      <br />
      ------------------------
    </pre>
  );
};

export default SoakInformation;
