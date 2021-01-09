import React from "react";
import { ContentProps } from "../../providers/interface";


const GermInformation = ({plantObject}:ContentProps ) => {
  return (
    <pre className="ger">
      <br />
      Germination: {plantObject.cycleData.germination.time}
      <br />
      ------------------------
    </pre>
  );
};

export default GermInformation;
