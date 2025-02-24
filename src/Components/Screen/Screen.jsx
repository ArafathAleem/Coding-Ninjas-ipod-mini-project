import React from "react";
import styles from "./Screen.module.css";

export default function Screen({ menu, selected, playingSong }) {
  const renderScreen = () => {
    if (playingSong) {
      return (
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
      );
    } else {
      switch (menu[selected]) {
        case "Cover Flow":
          return <div>Cover Flow</div>;
        case "Music":
          return (
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
                <img
                  src="/cover.jpg"
                  alt="Cover"
                  className={styles.coverImage}
                />
              </div>
            </div>
          );
        case "Games":
          return <div>Games</div>;
        case "Settings":
          return <div>Settings</div>;
        default:
          return null;
      }
    }
  };

  return <div className={styles.screen}>{renderScreen()}</div>;
}
