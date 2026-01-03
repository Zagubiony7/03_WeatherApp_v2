import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Weather from "./components/Weather/Weather";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const App = () => {
  const [checkLocation, setCheckLocation] = useState("New York");
  const [apiData, setApiData] = useState({ icon: "", temp: "", name: "", humidity: "", speed: "" });
  return (
    <div className="container">
      <SearchBar checkLocation={checkLocation} setCheckLocation={setCheckLocation} setApiData={setApiData} />
      <Weather icon={apiData.icon} temp={apiData.temp} name={apiData.name} />
      <WeatherInfo humidity={apiData.humidity} speed={apiData.speed} />
    </div>
  );
};

export default App;
