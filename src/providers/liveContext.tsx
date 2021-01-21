import React, { useContext, useReducer } from "react";
import moment from "moment";
import { plantData } from "./plantData";

export type LiveDate = {
  plantingDate: string;
  harvestDate: string;
};

export type ModalSelection = {
  id: string;
  date: LiveDate;
};

export type LiveUnit = {
  id: string;
  date: LiveDate;
  amount: number;
};

export type State = {
  trayContent: LiveUnit[];
  plantingDate: string;
  modalSelection: ModalSelection;
  modalState: boolean;
  capacity: number;
  total: number;
};

const initialState: State = {
  trayContent: [],
  plantingDate: "2021-01-01",
  modalSelection: {
    id: "",
    date: {
      plantingDate: "",
      harvestDate: "",
    },
  },
  modalState: false,
  capacity: 60,
  total: 0,
};

const Context = React.createContext([
  initialState,
  ({ type, payload }: any) => {
    // do nohting.
  },
]);

const ACTIONS = {
  PLANTING: "PLANTING",
  SET_DATE: "SET_DATE",
  CLEAR_TRAY: "CLEAR_TRAY",

  SELECTED_MODAL_EVENT: "SELECTED_MODAL_EVENT",
  SET_MODAL_STATE: "SET_MODAL_STATE",
};

export const reducer = (state: State, { type, payload }: any) => {
  switch (type) {
    case "PLANTING":
      console.log("incoming payload: ", payload);
      console.log("trayContent start: ", state.trayContent);

      const newItem: LiveUnit = {
        id: payload.id,
        date: payload.date,
        amount: payload.number,
      };

      const updated: LiveUnit[] = state.trayContent.map((item) => {
        if (item.id === payload.id) {
          return newItem;
        } else return item;
      });

      const isAlready = (element: LiveUnit) => element.id === payload.id;

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

    case "SET_DATE":
      return { ...state, plantingDate: payload };

    case "CLEAR_TRAY":
      return { ...state, trayContent: payload };

    case "SELECTED_MODAL_EVENT":
      return { ...state, modalSelection: payload };

    case "SET_MODAL_STATE":
      return { ...state, modalState: payload };

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
