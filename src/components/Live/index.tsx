import React, { useState, useRef } from "react";
import EcoIcon from "@material-ui/icons/Eco";
import AddIcon from "@material-ui/icons/Add";
import LiveUnit from "../LiveUnit";
import LiveUnitRow from "../LiveUnitRow";
import { plantData } from "../../providers/plantData";
import { useLiveContext } from "../../providers/liveContext";

const Live = () => {
  const [numberSelected, setNumberSelected] = useState(1);
  const { state, dispatch, ACTIONS }: any = useLiveContext();

  const addNewRow = () => {
    setNumberSelected(numberSelected + 1);
  };

  const submitSelection = () => {
    setNumberSelected(0);
  };


  return (
    <div className="liveContainer">
      <div className="liveFormWrapper">
        <h3>Plant Selection</h3>
        {new Array(numberSelected).fill(1).map((index) => (
          <LiveUnitRow key={index} />
        ))}

        <div className="addNewRow">
          <button onClick={addNewRow}>
            <AddIcon />
          </button>
        </div>
        <div className="submitSelection">
          <button onClick={submitSelection}>
            <EcoIcon /> Plant selected
          </button>
        </div>
      </div>
      <div className="liveWrapper">
        {new Array(60).fill(1).map((unit, index) => (
          <LiveUnit key={index} />
        ))}
      </div>
    </div>
  );
};

export default Live;
