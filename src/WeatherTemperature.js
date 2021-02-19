import React, {useState} from "react";

export default function WeatherTemperature (props){
  const [unit, SetUnit] = useState(`celsius`);
  function showToFahren(event){
    event.preventDefault();
    SetUnit("fahrenheit");
  }

function showToCelsius (event){
  event.preventDefault();
    SetUnit("celsius")
}
function fahrenheit (){
  return (props.celsius * 9/5) + 32;
}

  if (unit ===`celsius`) {
   return (
    <div className ="WeatherTemperature">
        <div className="large-temp">
            <div style={{ float: "left" }}>
              <h1 id="current-temp">{Math.round(props.celsius)}</h1>
              <div className="col-0">
                <a href="/" className="celsius" onClick={showToCelsius}>
                  °C
                </a>
                |
                <a href="/" className="fahrenheit" onClick={showToFahren}>
                  °F
                </a>
               </div>
            </div>
        </div>
    </div>
); 
} else {
return (
    <div className ="WeatherTemperature">
        <div className="large-temp">
            <div style={{ float: "left" }}> 
              <h1 id="current-temp">{Math.round(fahrenheit())}</h1>
              <div className="col-0">
                <a href="/" className="celsius" onClick={showToCelsius}>
                  °C
                </a>
                |
                <a href="/" className="fahrenheit" onClick={showToFahren}>
                  °F
                </a>
               </div>
            </div>
        </div>
    </div>
);
}
}
