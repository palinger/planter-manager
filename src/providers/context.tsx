import React, { useContext, useReducer } from "react";
import { plantData } from "../providers/plantData";

export type ModalSelection = {
  id: string;
  type: string;
  date: string;
};

export type State = {
  selection: string[];
  harvestDate: string;
  modalSelection: ModalSelection;
  modalState: boolean;
};

const initialState: State = {
  selection: [],
  harvestDate: "2021-01-01",
  modalSelection: {
    id: "",
    type: "",
    date: "",
  },
  modalState: false,
};

const Context = React.createContext([
  initialState,
  ({ type, payload }: any) => {
    // do nohting.
  },
]);

const ACTIONS = {
  SET_DATE: "SET_DATE",
  // CLEAR_DATE: "CLEAR_DATE",
  
  UPDATE_SELECTION: "UPDATE_SELECTION",
  ALL_SELECTION: "ALL_SELECTION",
  CLEAR_SELECTION: "CLEAR_SELECTION",

  SELECTED_MODAL_EVENT: "SELECTED_MODAL_EVENT",
  SET_MODAL_STATE: "SET_MODAL_STATE",
};

export const reducer = (state: State, { type, payload }: any) => {
  switch (type) {
    case "UPDATE_SELECTION":
      return { ...state, selection: payload };

    case "CLEAR_SELECTION":
      return { ...state, selection: payload };

    case "ALL_SELECTION":
      return { ...state, selection: payload };

    // case "CLEAR_DATE":
    //   return { ...state, harvestDate: "payload" };

    case "SET_DATE":
      return { ...state, harvestDate: payload };

    case "SELECTED_MODAL_EVENT":
      return { ...state, modalSelection: payload };

    case "SET_MODAL_STATE":
      return { ...state, modalState: payload };

    default:
      return state;
  }
};

export const ContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  const [state, dispatch] = useContext(Context);

  return {
    state,
    dispatch,
    ACTIONS,
  };
};
