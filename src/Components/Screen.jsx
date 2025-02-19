import React from "react";

export default function Screen({ menu, selected }) {
  return (
    <div className="screen">
      <h2>iPod.js</h2>
      <ul>
        {menu.map((item, index) => (
          <li key={index} className={selected === index ? "active" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
