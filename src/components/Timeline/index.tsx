import React, { useState } from "react";
import Select from "react-select";
import { useAppContext } from "../../providers/context";
import { plantData, options } from "../../providers/plantData";
import PlantCycle from "../PlantCycle";
import Modal from "react-modal";

const Timeline = () => {
  const { state, dispatch, ACTIONS }: any = useAppContext();
  const [modalState, setModalState] = useState(false);
  
  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

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
      <div className="visualWrapper">
        <div className="dayNumbers">
          {new Array(20).fill(0).map((item: number, index: number) => {
            return (
              <div className={(index + 1) % 7 === 0 ? "seven" : ""}>
                <div>{20 - index}</div>
              </div>
            );
          })}
        </div>
        <div>
          {state?.selection?.map((item: string, index: number) => {
            return (
              <PlantCycle
                key={index}
                id={item}
                harvestDate={state.harvestDate}
              />
            );
          })}
        </div>
      </div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalState} contentLabel="Example Modal">
        <button onClick={closeModal}>close</button>
        {/* <h3>{plantData[state.modalSelection.id].cycleData[state.modalSelection.type]}</h3> */}
        <p></p>
      </Modal>
    </div>
  );
};

export default Timeline;
