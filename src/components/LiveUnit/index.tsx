import React from "react";
import TodayIcon from "@material-ui/icons/Today";
import EcoIcon from "@material-ui/icons/Eco";
import { useLiveContext } from "../../providers/liveContext";

interface LiveProps {
  plantName: string;
  id: string;
}

const LiveUnit = ({ id, plantName}:LiveProps) => {
  const { dispatch, ACTIONS }: any = useLiveContext();

  const getMoreOnEvent = (e: any, eventId: string, eventType: string) => {
    dispatch({
      type: ACTIONS.SELECTED_MODAL_EVENT,
      payload: {
        type: eventType,
        id: eventId,
        date: "calculatedDate",
      },
    });
    dispatch({
      type: ACTIONS.SET_MODAL_STATE,
      payload: true,
    });
  };

  return (
    <div className="liveUnit">
      <EcoIcon />
      {/* <span>{plantName}</span> */}
    </div>
  );
};

export default LiveUnit;
