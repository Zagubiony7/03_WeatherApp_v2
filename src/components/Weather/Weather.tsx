import "./Weather.css";
import sunny from "../../assets/clear.png";

const Weather = () => {
  return (
    <div className="weather">
      <img src={sunny} alt="weather-atmospheric-condition image" />
      <div className="weather-celsius-location">
        <p className="celsius-info">
          21<span>°C</span>
        </p>
        <p className="location">New York</p>
      </div>
    </div>
  );
};

export default Weather;
