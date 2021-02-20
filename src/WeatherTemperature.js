import React, {useState} from "react";


export default function WeatherTemperature (props){
  const [unit, setUnit] = useState(`celsius`);

  function showToFahren(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }

function showToCelsius (event){
  event.preventDefault();
    setUnit("celsius")
}
function fahrenheit (){
  return (props.celsius * 9/5) + 32;
}

  if (unit ===`celsius`) {
   return (
    <div className ="WeatherTemperature">
        <div className="large-temp">
              <h1 id="current-temp">{Math.round(props.celsius)}</h1>
              <span className="col-0">
                <a href="#" className="celsius" onClick={showToCelsius}>
                  °C
                </a>
                |
                <a href="#" className="fahrenheit" onClick={showToFahren}>
                  °F
                </a>
               </span>
            </div>
        </div>
); 
} else {
return (
    <div className ="WeatherTemperature">
        <div className="large-temp"> 
              <h1 id="current-temp">{Math.round(fahrenheit())}</h1>
              <span className="col-0">
                <a href="/" className="celsius" onClick={showToCelsius}>
                  °C
                </a>
                |
                <a href="/" className="fahrenheit" onClick={showToFahren}>
                  °F
                </a>
               </span>
            </div>
        </div>
);
}
}
