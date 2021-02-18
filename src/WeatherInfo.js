import React from "react";
import ForecastInfo from "./ForecastInfo";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo (props){
return (
     <div className ="WeatherInfo">
        <div className="container">
          <ForecastInfo />
          <br />
           <div className="large-temp">
            <div style={{ float: "left" }}>
              <h1 id="current-temp">{Math.round(props.data.temperature)}</h1>
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
             <div className="Description">
             <ul>
               <li id="humidity">Humidity: {props.data.humidity}%</li>
               <li id="wind-speed">Wind Speed: {props.data.windSpeed} Km/H </li>
               <li id="descript">{props.data.description}</li>
               <li id="local-time"><FormattedDate date={props.data.date} /></li>
             </ul>
            </div>
             </div>
           <span>
            <div className="MainCityTemp">
          <span>
            <div className="icon">
            <WeatherIcon code={props.data.icon}/>
            </div>
        </span>
        <br />
       <h1 id="city">{props.data.city}</h1>
        </div>
          </span>
        </div>
        </div>
)
}