import React, {useState} from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";


export default function ForecastInfo(props) {
  const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState (null);

  function handleForecastResponse(response){
 setForecast(response.data);
 setLoaded(true);
  }
  if (loaded && props.city ===forecast.city.name) {
      return (
        <div className="WeatherForecast row">
    <ForecastPreview data={forecast.list[0]}/>
    <ForecastPreview data={forecast.list[1]}/>
    <ForecastPreview data={forecast.list[2]}/>
    <ForecastPreview data={forecast.list[3]}/>
       </div>
  );
  } else {
  let apiKey = "f849a290611306768174e22ee045bba6"
  let url =`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
  axios.get(url).then(handleForecastResponse);
 return null 
}
}
