  import React from "react";

import "./Form.css";

export default function Form() {
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
      </form>    </div>
  );
}
