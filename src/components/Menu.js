import React, { useState } from "react";
import Drawer from "./Drawer";
import Slide from "react-reveal/Slide";
export default function Menu(props) {
  const { icon, title, items } = props;
  const [drawerVisible, setDrawerVisible] = useState("nav-hidden");

  return (
    <div>
      <button
        className="menu-button"
        onClick={() =>
          setDrawerVisible(
            drawerVisible === "nav-visible" ? "nav-hidden" : "nav-visible"
          )
        }
      >
        {icon} {drawerVisible === "nav-visible" ? "Close" : title}
      </button>
      <Slide bottom when={drawerVisible === "nav-visible"}>
        <div className={drawerVisible}>
          <Drawer changeItem={props.changeData} items={items} />
        </div>
      </Slide>
    </div>
  );
}
