import React from "react";
import ForecastInfo from "./ForecastInfo";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props){
return (
     <div className ="WeatherInfo">
        <div className="container">
          <ForecastInfo />
          <br />
          <WeatherTemperature celsius ={props.data.temperature}/>
             <div className="Description">
             <ul>
               <li id="humidity">Humidity: {props.data.humidity}%</li>
               <li id="wind-speed">Wind Speed: {props.data.windSpeed} Km/H </li>
               <li id="descript">{props.data.description}</li>
               <li id="local-time"><FormattedDate date={props.data.date} /></li>
             </ul>
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
           
);
}