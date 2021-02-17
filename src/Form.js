import React from "react";
import "./Form.css";

export default function Form() {
  const apiKey="f849a290611306768174e22ee045bba6";
  let city="London"
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  return (
    <div className="form">
      <form id="search-form">
        <input
          type="search"
          placeholder="Type your city..."
          className="city-input"
          autocomplete="off"
          autoFocus="on"
        />
        <input type="Submit" className="submit" value="Search" />
        <button type="button" className="btn-info-location">
          {" "}
          My Location{" "}
        </button>
      </form>
    </div>
  );
}
