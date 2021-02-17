import React,{useState} from "react";
import Description from "./Description";
import ForecastInfo from "./ForecastInfo";
import MainCityTemp from "./MainCityTemp";
import axios from "axios";

import Form from "./Form";

import "./styles.css";

export default function App() {
  const [ready, setReady]=useState(false)
  const [temperature, setTemperature]=useState(null);
  function handleResponse(response){
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }
if (ready){
  return (
    <div className="App">
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">Weather APP</h5>
          <div>
            <Form />
          </div>
        </div>
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
        <br />
        <br />
      </div>
    </div>
  );
} else {
   const apiKey="f849a290611306768174e22ee045bba6";
  let city="Mexico"
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse);

  return "Loading..."
}
}