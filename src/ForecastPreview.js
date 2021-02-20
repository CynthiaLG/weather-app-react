import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastPreview(props){
function hours (){
let date = new Date(props.data.dt * 1000)
    let hours = date.getHours()
    return `${hours}:00`;
}
function temperature (){
    let temperature = Math.round(props.data.main.temp)
    return `${temperature}°C`;
}

return(
<div className="ForecastInfo col">
      <div className="cols">
        <div id="time1">
          <h2>{hours()}</h2>
        </div>
      </div>
      <div className="cols">
        <div>
          <h3 id="time1-temp">{temperature()}</h3>
        </div>
        <div>
      </div>
        <div className="cols" >
      <div>
        <WeatherIcon code={props.data.weather[0].icon}/>
      </div>
    </div>
    </div>
    </div>
);
}