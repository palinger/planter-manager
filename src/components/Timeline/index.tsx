import React from "react";
import Select from "react-select";
import Modal from "react-modal";
import moment from "moment";
import ClearIcon from "@material-ui/icons/Clear";
import { useAppContext } from "../../providers/context";
import { plantData, options } from "../../providers/plantData";
import PlantCycle from "../PlantCycle";
import ModalContent from "../ModalContent";
import Legend from "../Legend";
import { ReactComponent as Logo } from "../../logo-green.svg";
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

  const calculateDates = (date: string, days: number) => {
    let d = moment(new Date(date));
    let dm = d.subtract(days, "days");
    return dm.format("dd DD. MM.");
  };

  const calculateIsWeekend = (date: string, days: number) => {
    let d = moment(new Date(date));
    let dm = d.subtract(days, "days");
    if (dm.format("dd") === "Sa" || dm.format("dd") === "Su") {
      return (days + 1) % 7 === 0 ? "seven weekend" : "weekend";
    } else {
      return (days + 1) % 7 === 0 ? "seven" : "";
    }
  };
  calculateIsWeekend(state.harvestDate, 1);
  return (
    <div className="timelineContainer">
      <span>
        <Logo className="logo" />
        <h1>MicroVeg</h1>
      </span>
      <small>Planter Manager</small>
      <div className="controls">
        <div className="form">
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
        <Legend />
      </div>
      <div className="overflowWrapper">
        <div className="visualWrapper">
          <div className="dayNumbers">
            {new Array(14).fill(0).map((item: number, index: number) => {
              return (
                <div
                  key={index}
                  className={calculateIsWeekend(state.harvestDate, index)}
                >
                  {/* <div>{20 - index}</div> */}
                  <div>{calculateDates(state.harvestDate, index)}</div>
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
    </div>
  );
};

export default Timeline;
