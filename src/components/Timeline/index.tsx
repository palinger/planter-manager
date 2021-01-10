import React from "react";
import Select from "react-select";
import { useAppContext } from "../../providers/context";
import { plantData, options } from "../../providers/plantData";
import PlantCycle from "../PlantCycle";
import Modal from "react-modal";
import ModalContent from "../ModalContent";
import ClearIcon from "@material-ui/icons/Clear";

const Timeline = () => {
  const { state, dispatch, ACTIONS }: any = useAppContext();

  const closeModal = () => {
    dispatch({
      type: ACTIONS.SET_MODAL_STATE,
      payload: false,
    });
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
      payload: plantData.map((item) => item.id),
    });
  };

  return (
    <div className="timelineContainer">
      <div className="controls">
        <label htmlFor="harverstDate">Harvest Date:</label>
        <input
          id="harvestDate"
          type="date"
          value={state.harvestDate}
          onChange={(e) => {
            onDateChangeHandler(e);
          }}
        />
        <div className="selectWrapper">
          <Select
            onChange={(selection: any) => onPlantChangeHandler(selection)}
            isMulti
            options={options}
          />
        </div>
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
      </div>
      <div className="visualWrapper">
        <div className="dayNumbers">
          {new Array(20).fill(0).map((item: number, index: number) => {
            return (
              <div key={index} className={(index + 1) % 7 === 0 ? "seven" : ""}>
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
      <Modal
        ariaHideApp={false}
        isOpen={state.modalState}
        contentLabel="Example Modal"
      >
        <ClearIcon className="clearIcon" onClick={closeModal} />
        <div className="modalContent">
          <ModalContent variants={state.modalSelection} />
        </div>
      </Modal>
    </div>
  );
};

export default Timeline;
