import React, { useContext, useReducer } from "react";

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
  harvestDate: string;
  modalSelection: ModalSelection;
  modalState: boolean;
};

const initialState: State = {
  trayContent: [
    {
      id: "radish",
      date: {
        plantingDate: "2021-01-01",
        harvestDate: "2021-01-01",
      },
      amount: 0,
    },
    {
      id: "peas",
      date: {
        plantingDate: "2021-01-01",
        harvestDate: "2021-01-01",
      },
      amount: 0,
    },
  ],
  harvestDate: "2021-01-01",
  modalSelection: {
    id: "",
    date: {
      harvestDate: "",
      plantingDate: "",
    },
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
  PLANTING: "PLANTING",
  CLEAR_TRAY: "CLEAR_TRAY",

  SELECTED_MODAL_EVENT: "SELECTED_MODAL_EVENT",
  SET_MODAL_STATE: "SET_MODAL_STATE",
};

export const reducer = (state: State, { type, payload }: any) => {
  switch (type) {
    case "PLANTING":
      console.log("payload: ", payload);
      const isAlready = (element: LiveUnit) => element.id === payload.id;
      
      console.log("'some' check: ",state.trayContent.some(isAlready));

      const newItem = {
        id: payload.id,
        date: {
          plantingDate: "2021-01-01",
          harvestDate: "2021-01-01",
        },
        amount: payload.number,
      };

      let updated = state.trayContent.map((item) => {
        if (item.id === payload.id) {
          item.amount = parseInt(payload.number, 10);
        } else return item;
      });

      console.log("updated: ", updated);

      return { ...state, trayContent: updated };

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
