import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="form">
      <form id="search-form">
        <input
          type="search"
          placeholder="Enter your city"
          id="city-input"
          autocomplete="off"
        />
        <input type="Submit" id="submit-form" value="Search" />
        <button type="button" className="btn-info" id="current-location">
          {" "}
          My Location{" "}
        </button>
      </form>
    </div>
  );
}
