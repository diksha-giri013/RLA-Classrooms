import React from "react";
import { free_slots, days } from "../constants/database";

export default function SlotViewer(props) {
  const day = days[props.day];
  const slot = props.slot;
  const classrooms = [...free_slots[day]];
  return (
    <div className="data-container">
      <div className="free-data">
        {classrooms[slot].map((slot, index) => (
          <div key={index} className="free-slot">
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
}
