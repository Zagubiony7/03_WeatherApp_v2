import "./Weather.css";
import sunny from "../../assets/clear.png";
import cloud from "../../assets/cloud.png";
import drizzle from "../../assets/drizzle.png";
import rain from "../../assets/rain.png";
import snow from "../../assets/snow.png";
// import { type WeatherProps } from "../../../data";
// { weather, temp, locationName }: WeatherProps
const Weather = ({ main, temp, name }: { main: string; temp: string; name: string }) => {
  const whatWeather = main.toLowerCase();
  let whatImage;
  if (whatWeather.includes("rain")) whatImage = rain;
  if (whatWeather.includes("cloud")) whatImage = cloud;
  if (whatWeather.includes("snow")) whatImage = snow;
  if (whatWeather.includes("sunny")) whatImage = sunny;
  if (whatWeather.includes("clear")) whatImage = sunny;
  if (whatWeather.includes("drizzle")) whatImage = drizzle;
  return (
    <div className="weather">
      <img src={whatImage} alt="weather-atmospheric-condition image" />
      <div className="weather-celsius-location">
        <p className="celsius-info">
          {(+temp - 274).toFixed(0)}
          <span>°C</span>
        </p>
        <p className="location">{name}</p>
      </div>
    </div>
  );
};

export default Weather;
