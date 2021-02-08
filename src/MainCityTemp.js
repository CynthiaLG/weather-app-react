import React from "react";
import "./MainCityTemp.css";

export default function MainCityTemp() {
  return (
    <div className="MainCityTemp">
      <span>
        <img
          class="icon"
          id="icon"
          width="150"
          src="media/02d@2x.png"
          alt="cloudy"
        />
      </span>
      <br />
      <h1 id="city">Mexico City</h1>
    </div>
  );
}
