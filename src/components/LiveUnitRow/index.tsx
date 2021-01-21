import React, { useEffect, useState } from "react";
import { plantData, nameMap } from "../../providers/plantData";
import { PlantData } from "../../providers/interface";
// import DayIcon from "@material-ui/icons/Today";
import moment from "moment";
import { useLiveContext, LiveUnit } from "../../providers/liveContext";

interface LiveUnitRowProps {
  date: string;
  id: string;
}

const LiveUnitRow = ({ id, date }: LiveUnitRowProps) => {
  const { dispatch, ACTIONS }: any = useLiveContext();

  const calculateDates = (dateString: string, days: number) => {
    let d = moment(new Date(dateString));
    let dm = d.add(days, "days");
    return dm.format("dd DD. MM.");
  };

  let growDays: number = 0;

  plantData.map((item) => {
    if (item.id === id) {
      growDays = item.cycleData.grow.length;
    }
  });

  const updateSelection = (e: any) => {
    dispatch({
      type: ACTIONS.PLANTING,
      payload: {
        id: id,
        number: parseInt(e.target.value, 10),
        date: {
          plantingDate: calculateDates(date, 0), // just to format
          harvestDate: calculateDates(date, growDays),
        },
      },
    });
  };

  return (
    <div className="plantRow">
      <label htmlFor={id}>{nameMap[id]}</label>
      <input id={id} onChange={(e) => updateSelection(e)} type="number" />
    </div>
  );
};

export default LiveUnitRow;
