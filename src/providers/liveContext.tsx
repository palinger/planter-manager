import React, { useContext, useReducer } from "react";
import moment from "moment";
// import { plantData } from "./plantData";

export type LiveDate = {
  plantingDate: string;
  harvestDate: string;
};

export type ModalSelection = {
  id: string; 
  date: LiveDate;
};

export type LivePlantedType = {
  id: number;
  date: LiveDate;
  trayContent: LiveUnitType[];
};

export type LiveUnitType = {
  id: string;
  date: LiveDate;
  amount: number;
};

export type State = {
  trayContent: LiveUnitType[];
  plantingDate: string;
  modalSelection: ModalSelection;
  modalState: boolean;
  capacity: number;
  total: number;
  planted: LivePlantedType[];
};

const plantedLocalState = JSON.parse(localStorage.getItem("plantedTrays") || "[]");


const initialState: State = {
  trayContent: [],
  plantingDate: moment().format("YYYY-MM-DD"),
  modalSelection: {
    id: "",
    date: {
      plantingDate: "",
      harvestDate: "",
    },
  },
  modalState: false,
  capacity: 99,
  total: 0,
  planted: plantedLocalState,
};

const Context = React.createContext([
  initialState,
  ({ type, payload }: any) => {
    // do nohting.
  },
]);

const ACTIONS = {
  PLANTING: "PLANTING",
  REMOVE_PLANTING_ITEM: "REMOVE_PLANTING_ITEM",
  CLEAR_PLANTING: "CLEAR_PLANTING",

  PLANT_TO_TRAY: "PLANT_TO_TRAY",

  SET_DATE: "SET_DATE",
  CLEAR_TRAY: "CLEAR_TRAY",

  SELECTED_MODAL_EVENT: "SELECTED_MODAL_EVENT",
  SET_MODAL_STATE: "SET_MODAL_STATE",
};

export const reducer = (state: State, { type, payload }: any) => {
  switch (type) {
    case "PLANTING":
      const newItem: LiveUnitType = {
        id: payload.id,
        date: payload.date,
        amount: payload.number,
      };

      const updated: LiveUnitType[] = state.trayContent.map((item) => {
        if (item.id === payload.id) {
          return newItem;
        } else return item;
      });

      const isAlready = (element: LiveUnitType) => element.id === payload.id;

      const final = {
        ...state,
        trayContent: state.trayContent.some(isAlready)
          ? updated
          : [...state.trayContent, newItem],
      };

      let calculatedTotal: number = 0;
      final.trayContent.map(
        (item) => (calculatedTotal = calculatedTotal + item.amount)
      );
      return { ...final, total: calculatedTotal };

    case "CLEAR_PLANTING":
      const cleared = {
        ...state,
        total: 0,
      };

      return { ...cleared, trayContent: payload };

    case "REMOVE_PLANTING_ITEM":
      let withoutRemoved: any = state.trayContent.filter(
        (item) => item.id !== payload
      );
      let itemToRemove: any = state.trayContent.filter(
        (item) => item.id === payload
      );

      let updatedTotal = state.total - itemToRemove[0].amount;
      let tempState = { ...state, total: updatedTotal };
      return { ...tempState, trayContent: withoutRemoved };

    case "SET_DATE":
      return { ...state, plantingDate: payload };

    case "CLEAR_TRAY":
      return { ...state, trayContent: payload };

    case "SELECTED_MODAL_EVENT":
      return { ...state, modalSelection: payload };

    case "SET_MODAL_STATE":
      return { ...state, modalState: payload };

    case "PLANT_TO_TRAY":
      localStorage.setItem('plantedTrays', JSON.stringify(payload));
      return { ...state, planted: payload };

    default:
      return state;
  }
};

export const LiveContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};

export const useLiveContext = () => {
  const [state, dispatch] = useContext(Context);

  return {
    state,
    dispatch,
    ACTIONS,
  };
};
