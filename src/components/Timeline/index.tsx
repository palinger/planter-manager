import React, { useState } from "react";
import Select from "react-select";
import { useAppContext } from "../../providers/context";
import { plantData, options } from "../../providers/plantData";
import PlantCycle from "../PlantCycle";

const Timeline = () => {
  const { state, dispatch, ACTIONS }: any = useAppContext();

  const onPlantChangeHandler = (selection: any) => {
    dispatch({
      type: ACTIONS.UPDATE_SELECTION,
      payload: selection?.map((item: any) => item.value),
    });
  };

  const onDateChangeHandler = (e: any) => {
    dispatch({
      type: ACTIONS.SET_DATE,
      payload: e.target.value,
    });
  };

  const onClearHandler = () => {
    dispatch({
      type: ACTIONS.CLEAR_SELECTION,
      payload: [],
    });
  };

  const onSelectAllHandler = () => {
    dispatch({
      type: ACTIONS.ALL_SELECTION,
      payload: Object.keys(plantData),
    });
  };

  return (
    <div className="timelineContainer">
      <input
        type="date"
        value={state.harvestDate}
        onChange={(e) => {
          onDateChangeHandler(e);
        }}
      />
      <Select
        onChange={(selection: any) => onPlantChangeHandler(selection)}
        isMulti
        options={options}
      />
      <button
        onClick={() => {
          onClearHandler();
        }}
      >
        Clear
      </button>
      <button
        onClick={() => {
          onSelectAllHandler();
        }}
      >
        Sellect all
      </button>
      {state?.selection?.map((item: string) => {
        console.log(item);
        return <PlantCycle plantName={item} harvestDate={state.harvestDate} />;
      })}
    </div>
  );
};

export default Timeline;
