import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Weather from "./components/Weather/Weather";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const App = () => {
  const [checkLocation, setCheckLocation] = useState("New York");
  const [apiData, setApiData] = useState({ main: "", temp: "", name: "", humidity: "", speed: "" });
  return (
    <div className="container">
      <SearchBar checkLocation={checkLocation} setCheckLocation={setCheckLocation} setApiData={setApiData} />
      {apiData.name && <Weather main={apiData.main} temp={apiData.temp} name={apiData.name} />}
      {apiData.name && <WeatherInfo humidity={apiData.humidity} speed={apiData.speed} />}
    </div>
  );
};

export default App;
// "https://api.openweathermap.org/data/2.5/weather?q=London&appid=323447a29a6341d2f7b750b15aef2342"
// const {weather: { id, description },main: { temp, humidity },wind: { speed }} = data
// `https://api.openweathermap.org/data/2.5/weather?q=${checkLocation}&appid=323447a29a6341d2f7b750b15aef2342`

// if(checLocation) wykonaj zapytanie
