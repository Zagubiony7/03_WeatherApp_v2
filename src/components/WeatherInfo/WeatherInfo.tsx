import "./WeatherInfo.css";

import humidity from "../../assets/humidity.png";
import wind_speed from "../../assets/wind.png";

const WeatherInfo = () => {
  return (
    <div className="weather-info">
      <div className="info">
        <img src={humidity} alt="humidity image" />
        <div className="weather-stat">
          <p className="info-stat">67 %</p>
          <p className="info-name">Humidity</p>
        </div>
      </div>
      <div className="info">
        <img src={wind_speed} alt="humidity image" />
        <div className="weather-stat">
          <p className="info-stat">2.06 km/h</p>
          <p className="info-name">Humidity</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
