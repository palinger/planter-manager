import React, { useState } from "react";
import Select from "react-select";
import EcoIcon from "@material-ui/icons/Eco";
import LiveUnit from "../LiveUnit";
import LiveUnitRow from "../LiveUnitRow";
import { options, nameMap } from "../../providers/plantData";
import {  PlantData } from "../../providers/interface";
import { useLiveContext } from "../../providers/liveContext";

const Live = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const { state, dispatch, ACTIONS }: any = useLiveContext();

  const submitSelection = () => {
    console.log("submit");
  };

  const onDateChange = (e: any) => {
    setDate(e.target.value);

    dispatch({
      type: ACTIONS.SET_DATE,
      payload: e.target.value,
    });
  };

  const onPlantChangeHandler = (selection: any) => {
    let sel = selection?.map((item: any) => item.value);
    setSelected(sel);
  };

  return (
    <div className="liveContainer">
      <div className="liveFormWrapper">
        <h3>Plant Selection</h3>
        <div className="liveControl">
          <div className="liveControlItem">
            <label>
              Planting Date:
              <input
                onChange={(e) => {
                  onDateChange(e);
                }}
                type="date"
                value={date}
              />
            </label>
          </div>
          <div className="liveControlItem">
            <Select
              onChange={(selection: any) => onPlantChangeHandler(selection)}
              isMulti
              options={options}
            />
          </div>
        </div>
        {selected.map((item, index) => (
          <LiveUnitRow key={index} id={item} date={date} />
        ))}
        <div className="submitSelection">
          <button onClick={submitSelection}>
            <EcoIcon /> Plant selected
          </button>
        </div>
      </div>
      <div className="liveWrapper">
      {new Array(state.total).fill(1).map((unit, index) => (
          <LiveUnit key={index} id="peas" plantName="Hrasak"/>
        ))}
        {/* {state.trayContent.map((unit: PlantData, index: number) => (
          item.
          <LiveUnit key={index} id={unit.id} plantName={nameMap[unit.id]} />
        ))} */}
      </div>
    </div>
  );
};

export default Live;
