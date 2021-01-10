import React from "react";
import TodayIcon from "@material-ui/icons/Today";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import { useAppContext } from "../../providers/context";

interface PlantEventProps {
  length: number;
  plantName: string;
  calculatedDate: string;
  id: string;
  type: "soak" | "germination" | "grow";
  isFirst: boolean;
}

const PlantEvent = ({
  plantName,
  length,
  type,
  calculatedDate,
  id,
  isFirst,
}: PlantEventProps) => {
  const { dispatch, ACTIONS }: any = useAppContext();
  
  const getMoreOnEvent = (e: any, eventId: string, eventType: string) => {
    dispatch({
      type: ACTIONS.SELECTED_MODAL_EVENT,
      payload: {
        type: eventType,
        id: eventId,
        date: calculatedDate
      }
    })
    dispatch({
      type: ACTIONS.SET_MODAL_STATE,
      payload: true
    })
  };

  const renderIcon = (isFirstEvent: boolean, eventId: string, eventType: string) => {
    if (isFirstEvent) {
      return <TodayIcon onClick={(e) => getMoreOnEvent(e, eventId, type)} className="iconEvent"  />;
    } else return <MoreIcon />;
  };

  return (
    <div className="plantEventContainer">
      <div className="plantEvent">
        <span className={type} >
          {renderIcon(isFirst, id, type)}
        </span>
      </div>
    </div>
  );
};

export default PlantEvent;
