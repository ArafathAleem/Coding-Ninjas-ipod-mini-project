import React, { useState } from "react";
import Screen from "./Screen";
import ClickWheel from "./ClickWheel";

export default function iPod() {
  const [menu, setMenu] = useState([
    "Cover Flow",
    "Music",
    "Games",
    "Settings",
  ]);
  const [selected, setSelected] = useState(0);
  return (
    <div className="">
      <Screen menu={menu} />
      <ClickWheel
        selected={selected}
        setSelected={setSelected}
        menuLength={menu.length}
      />
    </div>
  );
}
