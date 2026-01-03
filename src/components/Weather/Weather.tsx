import "./Weather.css";
import sunny_icon from "../../assets/clear.png";
import cloud_icon from "../../assets/cloud.png";
import drizzle_icon from "../../assets/drizzle.png";
import rain_icon from "../../assets/rain.png";
import snow_icon from "../../assets/snow.png";
import { type WeatherProps } from "../../../data";
const Weather = ({ icon, temp, name }: WeatherProps) => {
  const allIcons: Record<string, string> = {
    "01d": sunny_icon,
    "02d": cloud_icon,
    "10d": rain_icon,
    "09d": drizzle_icon,
    "13d": snow_icon,
  };
  return (
    <div className="weather">
      <img
        src={allIcons[icon] ?? `https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather-atmospheric-condition image"
      />
      <div className="weather-celsius-location">
        <p className="celsius-info">
          {(+temp).toFixed(0)}
          <span>°C</span>
        </p>
        <p className="location">{name}</p>
      </div>
    </div>
  );
};

export default Weather;
