import React, { useState } from "react";
import Select from "react-select";
import EcoIcon from "@material-ui/icons/Eco";
import LiveUnit from "../LiveUnit";
import LiveUnitRow from "../LiveUnitRow";
import { options, nameMap } from "../../providers/plantData";
import { useLiveContext, LiveUnitType } from "../../providers/liveContext";

const Live = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [date, setDate] = useState("2021-01-01");
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

  const onPlantChangeHandler = (selection: any, action: any) => {
    if (action.action === "remove-value") {
      dispatch({
        type: ACTIONS.REMOVE_PLANTING_ITEM,
        payload: action.removedValue.value,
      });
    }
    if (action.action === "clear") {
      dispatch({
        type: ACTIONS.CLEAR_PLANTING,
        payload: [],
      });
    }
    let sel = selection?.map((item: any) => item.value);
    setSelected(sel);
  };

  let liveCollection: any = [];

  state.trayContent.map((unit: LiveUnitType, index: number) =>
    new Array(unit.amount).fill(1).map((plantUnit, index) => {
      liveCollection.push(
        <LiveUnit key={index} id={unit.id} plantName={nameMap[unit.id]} date={unit.date.harvestDate} />
      );
    })
  );

  let isFull: any = state.capacity <= state.total ? { color: "darkRed" } : {};

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
              onChange={(selection: any, action: any) =>
                onPlantChangeHandler(selection, action)
              }
              isMulti
              options={options}
            />
          </div>
        </div>
        {selected?.map((item, index) => (
          <LiveUnitRow key={index} id={item} date={date} />
        ))}
        <div className="limits">
          <span style={isFull}>Capacity: {state.capacity}</span>
          <span style={isFull}>Total: {state.total}</span>
          <span>Remaining: {state.capacity - state.total}</span>
        </div>
        <div className="submitSelection">
          <button onClick={submitSelection}>
            <EcoIcon /> Plant selected
          </button>
        </div>
      </div>
      <div className="liveWrapper">{liveCollection}</div>
    </div>
  );
};

export default Live;
