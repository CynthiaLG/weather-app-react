import React from "react";
import ForecasteImg from "./ForecastImg";

export default function ForecastInfo() {
  return (
    <div className="ForecasteInfo">
      <div className="row row-cols-5">
        <div id="time1">
          <h2>9:00</h2>
        </div>
        <div id="time2">
          <h2>12:00</h2>
        </div>
        <div id="time3">
          <h2>15:00</h2>
        </div>
        <div id="time4">
          <h2>18:00</h2>
        </div>
        <div id="time5">
          <h2>21:00</h2>
        </div>
      </div>
      <div className="row row-cols-5">
        <div>
          <h3 id="time1-temp">23°C</h3>
        </div>
        <div>
          <h3 id="time2-temp">20°C</h3>
        </div>
        <div>
          <h3 id="time3-temp">28°C</h3>
        </div>
        <div>
          <h3 id="time4-temp">25°C</h3>
        </div>
        <div>
          <h3 id="time5-temp">27°C</h3>
        </div>
      </div>
      <ForecasteImg />
    </div>
  );
}
