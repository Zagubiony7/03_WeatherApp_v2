import "./WeatherInfo.css";

import humidity from "../../assets/humidity.png";
import wind_speed from "../../assets/wind.png";

// import type { WeatherInfoProps } from "../../../data";
// { humidityPercent, windSpeed }: WeatherInfoProps

import WeatherDetails from "../WeatherDetails/WeatherDetails";

const WeatherInfo = () => {
  return (
    <div className="weather-info">
      <WeatherDetails img={humidity} infoStat={50 + "%"}>
        Humidity
      </WeatherDetails>
      <WeatherDetails img={wind_speed} infoStat={"2.06km/h"}>
        Wind Speed
      </WeatherDetails>
    </div>
  );
};

export default WeatherInfo;

// Fix data structure and add WeatherDetails component
