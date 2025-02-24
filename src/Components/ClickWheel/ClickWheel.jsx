import React from "react";
import styles from "./ClickWheel.module.css";

const ClickWheel = ({
  selected,
  setSelected,
  menuLength,
  setPlayingSong,
  handleMenuClick,
}) => {
  const handleRotate = (direction) => {
    setSelected((prev) =>
      direction === "prev"
        ? (prev - 1 + menuLength) % menuLength
        : (prev + 1) % menuLength
    );
  };

  const handlePlayPause = () => {
    setPlayingSong((prev) =>
      prev ? null : { title: "Song 1", artist: "Artist 1", cover: "/song1.jpg" }
    );
  };

  return (
    <div className={styles.clickWheel}>
      {/* Top Menu */}
      <button
        onClick={handleMenuClick}
        className={`${styles.btn} ${styles.menu}`}
      >
        Menu
      </button>

      {/* Left (Previous) */}
      <button
        onClick={() => handleRotate("prev")}
        className={`${styles.btn} ${styles.prev}`}
      >
        ⏮
      </button>

      {/* Center (OK) */}
      <button onClick={handleMenuClick} className={styles.center}>
        OK
      </button>

      {/* Right (Next) */}
      <button
        onClick={() => handleRotate("next")}
        className={`${styles.btn} ${styles.next}`}
      >
        ⏭
      </button>

      {/* Bottom (Play/Pause) */}
      <button
        onClick={handlePlayPause}
        className={`${styles.btn} ${styles.playPause}`}
      >
        ▶/⏸
      </button>
    </div>
  );
};

export default ClickWheel;
