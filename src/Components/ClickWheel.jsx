import React from "react";

export default function ClickWheel({ selected, setselected, menuLength }) {
  const handleRotate = (directtion) => {
    setselected((prev) =>
      directtion === "up"
        ? (prev - 1 + menuLength) % menuLength
        : (prev + 1) % menuLength
    );
  };
  return (
    <div className="clickWheel">
      <button onClick={handleRotate} className="btn"></button>
      <button className="center">OK</button>
      <button onClick={handleRotate} className="btn"></button>
    </div>
  );
}
