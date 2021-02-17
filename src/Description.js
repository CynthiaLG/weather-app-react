import React, {useState} from "react";
import axios from "axios";
import "./Description.css";

export default function Description() {
  const [ready, setReady]=useState(false)
  const [weatherData, setWeatherData]=useState({});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description
    });
    setReady(true);
  }
  if (ready){ 
  return (    
    <div className="Description">
      <ul>
        <li id="humidity">Humidity: {weatherData.humidity}%</li>
        <li id="wind-speed">Wind Speed: {weatherData.windSpeed} Km/H </li>
        <li id="descript">{weatherData.description}</li>
        <li id="local-time">Last Updated: Monday 11:30</li>
      </ul>
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
