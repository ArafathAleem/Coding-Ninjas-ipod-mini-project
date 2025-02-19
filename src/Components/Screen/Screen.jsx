import React from "react";
import styles from "./Screen.module.css";

export default function Screen({ menu, selected, playingSong }) {
  console.log("menu:", menu);
  console.log("selected:", selected);
  console.log("playingSong:", playingSong);

  return (
    <div className={styles.screen}>
      {!playingSong ? (
        <div className={styles.menuContainer}>
          <div className={styles.menuLeft}>
            <h2>iPod.js</h2>
            <ul>
              {menu.map((item, index) => (
                <li
                  key={index}
                  className={selected === index ? styles.active : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.menuRight}>
            <img src="/cover.jpg" alt="Cover" className={styles.coverImage} />
          </div>
        </div>
      ) : (
        <div className={styles.musicScreen}>
          <img
            src={playingSong?.cover || "/default-cover.jpg"}
            alt={playingSong?.title || "Unknown"}
            className={styles.musicCover}
          />
          <h3>{playingSong?.artist || "Unknown Artist"}</h3>
          <p>{playingSong?.title || "Unknown Title"}</p>
          <div className={styles.musicBar}></div>
        </div>
      )}
    </div>
  );
}
