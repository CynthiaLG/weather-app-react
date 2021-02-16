import React from "react";
import Description from "./Description";
import ForecastInfo from "./ForecastInfo";
import MainCityTemp from "./MainCityTemp";

import Form from "./Form";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="card w-75">
        <div class="card-body">
          <h5 class="card-title">Weather APP</h5>
          <div>
            <Form />
          </div>
        </div>
        <div class="container">
          <ForecastInfo />
          <br />
          <div class="large-temp">
            <div style={{ float: "left" }}>
              <h1 id="current-temp">26</h1>
              <div class="col-0">
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
        <br />
        <br />
      </div>
    </div>
  );
}
