import "./WeatherDetails.css";
import { type WeatherDetailsProps } from "../../../data";

const WeatherDetails = ({ img, infoStat, children }: WeatherDetailsProps) => {
  return (
    <div className="info">
      <img src={img} alt="humidity image" />
      <div className="weather-stat">
        <p className="info-stat">{infoStat}</p>
        <p className="info-name">{children}</p>
      </div>
    </div>
  );
};
export default WeatherDetails;
