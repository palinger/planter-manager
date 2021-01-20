import React, { useState, useEffect } from "react";
import { plantData } from "../../providers/plantData";
import DayIcon from "@material-ui/icons/Today";
import { useLiveContext } from "../../providers/liveContext";


// interface DayInformationProps {
//   date: string
// }

const LiveUnitRow = () => {
  const [rowState, setRowState] = useState({});
  const [stateName, setStateName] = useState("peas");
  const [stateValue, setStateValue] = useState(0);
  const {dispatch, ACTIONS }: any = useLiveContext();

  useEffect(() => {
    dispatch({
      type: ACTIONS.PLANTING,
      payload: rowState
    }) 
  }, [rowState, ACTIONS.PLANTING, dispatch]);

  const updateSelection = (e: any) => {
    setStateName(e.target.value);
    setRowState({
      id: e.target.value,
      number: stateValue
    });
  };

  const onNumberInputChange = (e: any) => {
    setStateValue(e.target.value);
    setRowState({
      id: stateName,
      number: e.target.value
    });
  };

  return (
    <div className="plantRow">
      <label>
        Select plant:
        <select
          onChange={(e) => {
            updateSelection(e);
          }}
          value={stateName}
        >
          {plantData.map((plantItem, index) => (
            <option key={index} value={plantItem.id}>
              {plantItem.plantName}
            </option>
          ))}
        </select>
      </label>
      <label>
        Units:
        <input
          id={stateName}
          onChange={(e) => onNumberInputChange(e)}
          type="number"
          value={stateValue}
        />
      </label>
    </div>
  );
};

export default LiveUnitRow;
