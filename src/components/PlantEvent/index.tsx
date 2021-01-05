import React, {useState} from "react";

interface PlantEventProps {
  length: number;
  plantName: string;
  id: string;
  type: "soak" | "germination" | "grow";
}

const PlantEvent = ({ length, type }: PlantEventProps) => {
  const [setModalState, modalState] = useState(false);

  const getMoreOnEvent = (e:React.MouseEvent) => {
    console.log(e)
  };

  return (
    <div className="plantEventContainer">
      <div className="plantEvent">
        {new Array(length).fill(0).map((_, index) => (
          <span className={type} onClick={(e)=>getMoreOnEvent(e)}key={index}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PlantEvent;
