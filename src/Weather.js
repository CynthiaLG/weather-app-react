import React, {useState} from "react"; 
import WeatherInfo from "./WeatherInfo";
import axios from "axios"; 
import "./styles.css";

export default function Weather(props){
  const [weatherData, setWeatherData]=useState({});
  const [city, setCity]=useState(props.defaultCity);
  function handleResponse(response){
     setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        icon: response.data.weather[0].icon,
        description: response.data.weather[0].description,
        windSpeed: response.data.wind.speed,    
        city: response.data.name,
    });
  }

  function search(){
   const apiKey="f849a290611306768174e22ee045bba6";
   let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
   axios.get(apiUrl).then(handleResponse);
  }

function handleSubmit(event){
    // Searches for city 
    event.preventDefault();
  search ();

}
function handleCityChange(event){
setCity(event.target.value)
}

  if (weatherData.ready) {
      return(
          <div className="card w-75">
          <div className="card-body">
          <h5 className="card-title">Weather APP</h5>
         <div className="form">
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type your city..."
          className="city-input"
          autoComplete="off"
          autoFocus="on"
          onChange={handleCityChange}
        />
        <input type="Submit" className="submit" value="Search" />
        <button type="button" className="btn-info-location">
          {" "}
          My Location{" "}
        </button>
      </form>   
          <WeatherInfo data={weatherData}/>
        </div>
        </div>
        </div>
      );
  } else {
      search();
  return "Loading..."
}
}