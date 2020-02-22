import React from "react";

export default function Drawer(props) {
  const items = [...props.items];
  return (
    <div className="drawer">
      {items.map((item, index) => (
        <button
          onClick={() => props.changeItem(index)}
          className="slot-button"
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
