import React from "react";
import { slots } from "../constants/database";
export default function Slots() {
  const lectures = slots;
  return (
    <div>
      {lectures.map((lecture, index) => (
        <button className="slot-button" key={index}>
          {lecture}
        </button>
      ))}
    </div>
  );
}
