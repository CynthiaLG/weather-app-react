import React from "react";
import ForecastInfo from "./ForecastInfo";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";

export default function WeatherInfo (props){
return (
     <div className ="WeatherInfo">
        <div className="container">
          <ForecastInfo city ={props.data.city}/>
          <br />
          <WeatherTemperature celsius ={props.data.temperature}/>
             <ul className="description">
               <li id="humidity">Humidity: {props.data.humidity}%</li>
               <li id="wind-speed">Wind Speed: {props.data.windSpeed} Km/H </li>
               <li id="descript">{props.data.description}</li>
               <li id="local-time"><FormattedDate date={props.data.date} /></li>
             </ul>
             <div className= "main-icon">
              <WeatherIcon code={props.data.icon}/>
              </div>
          <h1 className="city">{props.data.city}</h1>
        </div>
      </div>
           
);
}