import React from "react";

export default function ForecasteImg() {
  return (
    <div class="row row-cols-5" id="day-img">
      <div>
        <img id="time1-icon" src="./media/02d@2x.png" alt="cloudy" />
      </div>
      <div>
        <img id="time2-icon" src="media/09d@2x.png" alt="rainy" />
      </div>
      <div>
        <img id="time3-icon" src="media/01d@2x.png" alt="sunny" />
      </div>
      <div>
        <img id="time4-icon" src="media/02d@2x.png" alt="cloudy" />
      </div>
      <div>
        <img id="time5-icon" src="media/01d@2x.png" alt="sunny" />
      </div>
    </div>
  );
}