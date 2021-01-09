import React from "react";
import TodayIcon from "@material-ui/icons/Today";
import DateRangeIcon from "@material-ui/icons/DateRange";
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
  const { state, dispatch, ACTIONS }: any = useAppContext();
  const getMoreOnEvent = (e: any, eventId: string, eventType: string) => {
    
    // console.log(e.target.parentNode.className)
    dispatch({
      type: ACTIONS.SELECTED_MODAL_EVENT,
      payload: {
        type: eventType,
        id: eventId
      }
    })
  };

  const renderIcon = (isFirstEvent: boolean, eventId: string, eventType: string) => {
    if (isFirstEvent) {
      return <TodayIcon onClick={(e) => getMoreOnEvent(e, eventId, type)} className="iconEvent"  />;
    } else return <DateRangeIcon />;
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
