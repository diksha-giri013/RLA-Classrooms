import React, { useState } from "react";
//import Slots from "./components/Slots";
//import logo from "./logo.svg";

import "./App.css";
import Menu from "./components/Menu";
import SlotViewer from "./components/SlotViewer";

import { slots, days } from "./constants/database";

function App() {
  const lectures = slots;
  const [currentDay, setCurrentDay] = useState(0);
  const [currentSlot, setCurrentSlot] = useState(1);

  return (
    <div className="App">
      <div className="navbar">
        <Menu
          icon="🕑"
          title="Select Time"
          items={lectures}
          changeData={setCurrentSlot}
        />
        <Menu
          changeData={setCurrentDay}
          icon="⌨"
          title="Select Day"
          items={days}
        />
      </div>
      <div className="data-header">
        <p>Selected Day: {days[currentDay]}</p>
        <p>Selected Time Slot: {slots[currentSlot]}</p>
      </div>
      {currentDay === 5 || currentDay === 6 ? (
        "Weekend! Chutti hai, pura college tumhara hai, Kahi bhi betho."
      ) : (
        <>
          <div style={{ fontFamily: "Quicksand", fontSize: "1.2rem" }}>
            "The following rooms in the building are free for your selection:"
          </div>
          <SlotViewer day={currentDay} slot={currentSlot} />
        </>
      )}
    </div>
  );
}

export default App;
