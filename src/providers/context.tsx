import React, { useContext, useReducer } from "react";
import { plantData } from "../providers/plantData";

export type State = {
  selection: string[];
  harvestDate: string
}

const initialState: State = {
  selection: [],
  // radish: false,
  // peas: false,
  // leak: false,
  // brokolli: false,
  // redCabbage: false,
  // pakchoi: false,
  harvestDate: "2021-01-01",
};

const Context = React.createContext([
  initialState,
  ({ type, payload }: any) => {
    // do nohting.
  },
]);

const ACTIONS = {
  SET_DATE: "SET_DATE",
  CLEAR_DATE: "CLEAR_DATE",
  UPDATE_SELECTION: "UPDATE_SELECTION",
  ALL_SELECTION: "ALL_SELECTION",
  CLEAR_SELECTION: "CLEAR_SELECTION",
};

export const reducer = (state: State, { type, payload }: any) => {
  switch (type) {
    case "UPDATE_SELECTION":
      return { ...state, selection: payload };

    case "CLEAR_SELECTION":
      return { ...state, selection: payload };

    case "ALL_SELECTION":
      return { ...state, selection: Object.keys(plantData) };

    case "CLEAR_DATE":
      return { ...state, harvestDate: "payload" };

    case "SET_DATE":
      return { ...state, harvestDate: payload };
    
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
