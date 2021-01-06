import React, { useState } from "react";

interface PlantEventProps {
  length: number;
  plantName: string;
  calculatedDate: string;
  id: string;
  type: "soak" | "germination" | "grow";
}

const PlantEvent = ({
  plantName,
  length,
  type,
  calculatedDate,
  id,
}: PlantEventProps) => {
  const [setModalState, modalState] = useState(false);

  const getMoreOnEvent = (e: React.MouseEvent) => {
    console.log(e);
  };

  return (
    <div className="plantEventContainer">
      <div className="plantEvent">
        <span className={type} onClick={(e) => getMoreOnEvent(e)}>
          Props: <br />
          plantName: {plantName}
          <br />
          type: {type}
          <br />
          calculated day: {calculatedDate}
          <br />
          id: {id}
          <br />
        </span>
      </div>
    </div>
  );
};

export default PlantEvent;
