import "./Weather.css";
import sunny from "../../assets/clear.png";
import { type WeatherProps } from "../../../data";

const Weather = ({ weather, temp, locationName }: WeatherProps) => {
  let weatherImage;
  if (weather.length > 0) {
    if (weather[0].main === "Clear") weatherImage = sunny;
  }
  return (
    <div className="weather">
      <img src={weatherImage} alt="weather-atmospheric-condition image" />
      <div className="weather-celsius-location">
        <p className="celsius-info">
          {temp}
          <span>°C</span>
        </p>
        <p className="location">{locationName}</p>
      </div>
    </div>
  );
};

export default Weather;
