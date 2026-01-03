import "./WeatherInfo.css";

import humidity from "../../assets/humidity.png";
import wind_speed from "../../assets/wind.png";

import type { WeatherInfoProps } from "../../../data";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

const WeatherInfo = ({ humidityPercent, windSpeed }: WeatherInfoProps) => {
  return (
    <div className="weather-info">
      <WeatherDetails img={humidity} infoStat={humidityPercent}>
        Humidity
      </WeatherDetails>
      <WeatherDetails img={wind_speed} infoStat={windSpeed}>
        Wind Speed
      </WeatherDetails>
    </div>
  );
};

export default WeatherInfo;

// Fix data structure and add WeatherDetails component
