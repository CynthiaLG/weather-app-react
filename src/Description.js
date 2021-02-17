import React from "react";
import "./Description.css";

export default function Description() {
  return (
    
    <div className="Description">
      <ul>
        <li id="humidity">Humidity: 40%</li>
        <li id="wind-speed">Wind Speed:0.40 Km/H </li>
        <li id="descript">Clear</li>
        <li id="local-time">Last Updated: Monday 11:30</li>
      </ul>
    </div>
  );
}
