import React, { useState } from "react";
import Screen from "../Screen/Screen";
import ClickWheel from "../ClickWheel/ClickWheel";
import styles from "./iPod.module.css";

export default function iPod() {
  const [menu, setMenu] = useState([
    "Cover Flow",
    "Music",
    "Games",
    "Settings",
  ]);
  const [selected, setSelected] = useState(0);
  const [playingSong, setPlayingSong] = useState(null);
  return (
    <div className={styles.ipodContainer}>
      <Screen menu={menu} selected={selected} playingSong={playingSong} />
      <ClickWheel selected={selected} setSelected={setSelected} />
    </div>
  );
}
