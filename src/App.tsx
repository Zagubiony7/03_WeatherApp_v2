import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Weather from "./components/Weather/Weather";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const App = () => {
  const [checkLocation, setCheckLocation] = useState("");

  console.log(checkLocation);
  return (
    <div className="container">
      <SearchBar checkLocation={checkLocation} setCheckLocation={setCheckLocation} />
      <Weather />
      <WeatherInfo />
    </div>
  );
};

export default App;
// "https://api.openweathermap.org/data/2.5/weather?q=London&appid=323447a29a6341d2f7b750b15aef2342"
// const {weather: { id, description },main: { temp, humidity },wind: { speed }} = data
// `https://api.openweathermap.org/data/2.5/weather?q=${checkLocation}&appid=323447a29a6341d2f7b750b15aef2342`

// if(checLocation) wykonaj zapytanie
