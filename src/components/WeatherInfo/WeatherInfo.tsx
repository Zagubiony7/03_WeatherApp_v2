import "./WeatherInfo.css";

import humidity_img from "../../assets/humidity.png";
import wind_speed from "../../assets/wind.png";

// import type { WeatherInfoProps } from "../../../data";
// { humidityPercent, windSpeed }: WeatherInfoProps

import WeatherDetails from "../WeatherDetails/WeatherDetails";

const WeatherInfo = ({ humidity, speed }: { humidity: string; speed: string }) => {
  return (
    <div className="weather-info">
      <WeatherDetails img={humidity_img} infoStat={humidity + "%"}>
        Humidity
      </WeatherDetails>
      <WeatherDetails img={wind_speed} infoStat={speed}>
        Wind Speed
      </WeatherDetails>
    </div>
  );
};

export default WeatherInfo;

// Fix data structure and add WeatherDetails component
