import React, { useState, useRef } from "react";
import Select from "react-select";
import EcoIcon from "@material-ui/icons/Eco";
import StorefrontIcon from '@material-ui/icons/Storefront';
import LiveUnit from "../LiveUnit";
import LiveUnitRow from "../LiveUnitRow";
import { options, nameMap } from "../../providers/plantData";
import { useLiveContext, LiveUnitType, LivePlantedType } from "../../providers/liveContext";
import moment from "moment";

const Live = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const { state, dispatch, ACTIONS }: any = useLiveContext();

  const selectInputRef = useRef<Select>(null);

  const submitSelection = () => {
    const newTray = {
      id: state.planted.length +1,
      date: date,
      trayContent: state.trayContent,
    };

    dispatch({
      type: ACTIONS.PLANT_TO_TRAY,
      payload: state.planted.concat(newTray),
    });

    dispatch({
      type: ACTIONS.CLEAR_TRAY,
      payload: [],
    });

    setSelected([]);
    selectInputRef.current && selectInputRef.current.select.clearValue();
  };

  const onDateChange = (e: any) => {
    setDate(e.target.value);

    dispatch({
      type: ACTIONS.SET_DATE,
      payload: e.target.value,
    });
    onPlantChangeHandler([], "clear");
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

  const harvestTrays = () => {
    localStorage.setItem('plantedTrays', '[]');
    dispatch({
      type: ACTIONS.PLANT_TO_TRAY,
      payload: [],
    });
  };

  let liveCollection: JSX.Element[] = [];

  state.trayContent.map((unit: LiveUnitType, index: number) =>
    new Array(unit.amount).fill(1).map((plantUnit, index) => {
      liveCollection.push(
        <LiveUnit
          key={index}
          id={unit.id}
          plantName={nameMap[unit.id]}
          date={unit.date.harvestDate}
        />
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
              ref={selectInputRef}
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
          <button onClick={submitSelection} disabled={state.trayContent.length === 0}>
            <EcoIcon /> Plant selected
          </button>
          <button onClick={harvestTrays} disabled={state.planted.length === 0}>
            <StorefrontIcon /> Harvest Trays
          </button>
        </div>
      </div>
      <div className="trayContent">
        {state.planted.map((tray:LivePlantedType) => (
          <div className="tray">
            <h5>Tray no. {tray.id}</h5>
            <span>Planted on {tray.date}</span>
            {tray.trayContent.map((plant) => (
              <p>{plant.id}:<span>{plant.amount}</span></p>
            ))}
          </div>
        ))}
      </div>
      <div className="liveWrapper">{liveCollection}</div>
    </div>
  );
};

export default Live;
