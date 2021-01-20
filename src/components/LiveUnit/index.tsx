import React from "react";
import TodayIcon from "@material-ui/icons/Today";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import { useLiveContext } from "../../providers/liveContext";

// interface LiveProps {
//   length: number;
//   plantName: string;
//   calculatedDate: string;
//   id: string;
//   type: "soak" | "germination" | "grow";
//   isFirst: boolean;
// }

const LiveUnit = () => {
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
      <span className="type">hello</span>
    </div>
  );
};

export default LiveUnit;
