import React, {useState} from "react";
import axios from "axios";
import "./MainCityTemp.css";

export default function MainCityTemp() {
  const [ready, setReady]=useState(false)
  const [city, setCity]=useState(null);
function handleResponse(response){
    console.log(response.data);
    setCity(response.data.name);
    setReady(true);
  }
if (ready){
  return (
    <div className="MainCityTemp">
      <span>
        <img
          className="icon"
          id="icon"
          width="150"
          src ="media/02d@2x.png"
          alt="cloudy"
        />
      </span>
      <br />
      <h1 id="city">{city}</h1>
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