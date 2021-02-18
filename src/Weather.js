import React from "react";
import ForecastInfo from "./ForecastInfo";
import MainCityTemp from "./MainCityTemp";
import Description from "./Description"; 

export default function Weather () {
    return (
        <div className="container">
          <ForecastInfo />
          <br />
           <div className="large-temp">
            <div style={{ float: "left" }}>
              <h1 id="current-temp">{Math.round(temperature)}</h1>
              <div className="col-0">
                <a href="#" id="celsius">
                  °C
                </a>
                |
                <a href="#" id="fahrenheit">
                  °F
                </a>
              </div>
            </div>
            <Description />
          </div>
          <span>
            <MainCityTemp />
          </span>
        </div>
    );
}