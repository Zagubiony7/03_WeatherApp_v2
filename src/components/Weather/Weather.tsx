import "./Weather.css";
import sunny from "../../assets/clear.png";
// import { type WeatherProps } from "../../../data";
// { weather, temp, locationName }: WeatherProps
const Weather = () => {
  return (
    <div className="weather">
      <img src={sunny} alt="weather-atmospheric-condition image" />
      <div className="weather-celsius-location">
        <p className="celsius-info">
          {10}
          <span>°C</span>
        </p>
        <p className="location">{"Warszawa"}</p>
      </div>
    </div>
  );
};

export default Weather;
