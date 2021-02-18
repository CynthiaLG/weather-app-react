import React,{useState} from "react";
import Weather from "./Weather";


import "./styles.css";

export default function App() {
  return (
    <div className="App">
       <Weather defaultCity="Mexico"/>
          <br />
    <footer>
    <p><a id="source-link" href="https://github.com/CynthiaLG/weather-app-react" target="_blank">Open Source-code</a> By Cynthia López Gálvez 🍀‍</p>
    </footer>
    <script src="src/script.js"></script>
         </div>
  );
}